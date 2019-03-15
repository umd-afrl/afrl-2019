from threading import Thread, Lock

import numpy as np
import scipy.signal.windows
from holoviews.streams import Pipe

import avmu

CABLE_DELAYS = 0.65 * 2
SWEEP_COUNT = 2
AVMU_IP_ADDRESS = "192.168.1.219"


class AvmuCapture:
    def __init__(self, hop_rate='HOP_15K', points=1024, start_f=250, stop_f=2100, avmu_ip='192.168.1.219'):
        self.device = avmu.AvmuInterface()
        self.hop_rate = hop_rate
        self.points = points
        self.start_f = start_f
        self.stop_f = stop_f
        self.avmu_ip = avmu_ip
        self.prev_sweep_data = []
        self.prev_sweep_data_lock = Lock()
        self.image_file_lock = Lock()
        self.device.setIPAddress(self.avmu_ip)
        self.device.setIPPort(1027)
        self.device.setTimeout(500)
        self.device.setMeasurementType('PROG_ASYNC')

        self.raw_pipe = Pipe(np.zeros((1, self.points * 2)))
        self.image_pipe = Pipe((np.zeros((1, self.points * 2)), []))

        self.axis = None

        self.device.initialize()

        self.device.setHopRate(self.hop_rate)
        self.device.addPathToMeasure('AVMU_TX_PATH_0', 'AVMU_RX_PATH_1')

        self.device.utilGenerateLinearSweep(startF_mhz=self.start_f, stopF_mhz=self.stop_f, points=self.points)

    def capture(self):
        self.device.start()
        self.device.beginAsync()

        cheby_win = scipy.signal.windows.chebwin(self.points, 45)

        frequencies = self.device.getFrequencies()

        step = abs(frequencies[0] - frequencies[-1]) / len(frequencies)
        front_padding_count = max(int(frequencies[0] / step), 0)

        freq_step = step * 1e6  # Step in MHz to Hz
        axis = np.transpose(np.array(range(0, 2048))) * (1 / (2048 * freq_step * 2))  # Hz to seconds
        axis = axis * 1e9  # Seconds to nanoseconds
        axis = axis - CABLE_DELAYS
        self.axis = axis * 0.983571  # Nanoseconds to feet

        while True:
            try:
                self.device.measure()
                sweeps = self.device.extractAllPaths()

                windowed_sweep = np.multiply(sweeps[0][1]['data'], cheby_win)

                padded_data = []

                while len(padded_data) < front_padding_count:
                    padded_data.append(0)
                padded_data.extend(windowed_sweep)

                powers_of_two = [2 ** x for x in range(16)]

                final_size = powers_of_two[0]
                for size in powers_of_two:
                    if size > len(padded_data):
                        final_size = size
                        break

                while len(padded_data) < final_size:
                    padded_data.append(0)

                padded_data = np.array(padded_data)
                time_domain_data = np.fft.ifft(padded_data)

                change = coherent_change_detection(time_domain_data, self.raw_pipe.data)

                change_peaks = self.detect_peaks(change[0], 200, 200, 1e-3)
                self.raw_pipe.send(time_domain_data)
                self.image_pipe.send((change, change_peaks))

            except KeyboardInterrupt:
                self.device.haltAsync()
                self.device.stop()

    def detect_peaks(self, x, num_train, num_guard, rate_fa):
        num_cells = x.size
        num_train_half = round(num_train / 2)
        num_guard_half = round(num_guard / 2)
        num_side = num_train_half + num_guard_half

        alpha = num_train * (rate_fa ** (-1 / num_train) - 1)  # threshold factor

        peak_idx = []
        for i in range(num_side, num_cells - num_side):

            if i != i - num_side + np.argmax(x[i - num_side:i + num_side + 1]):
                continue

            sum1 = np.sum(x[i - num_side:i + num_side + 1])
            sum2 = np.sum(x[i - num_guard_half:i + num_guard_half + 1])
            p_noise = (sum1 - sum2) / num_train
            threshold = alpha * p_noise

            if x[i] > threshold:
                peak_idx.append((self.axis[i], .5))

        peak_idx = np.array(peak_idx, dtype=float)

        return peak_idx


def coherent_change_detection(data, previous):
    diff_ccd = np.abs(data - previous)
    return np.reshape(diff_ccd, (1, 2048))


def start_threads(self):
    capture_thread = Thread(target=self.capture)
    capture_thread.start()
