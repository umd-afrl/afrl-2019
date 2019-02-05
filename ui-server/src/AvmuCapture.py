import avmu


class AvmuCapture:
    def __init__(self, hop_rate='HOP_15K', points=1024, start_f=250, stop_f=2100, avmu_ip='192.168.1.219'):
        self.device = avmu.AvmuInterface()
        self.hop_rate = hop_rate
        self.points = points
        self.start_f = start_f
        self.stop_f = stop_f
        self.avmu_ip = avmu_ip

    async def initialize(self):
        self.device.setIPAddress(self.avmu_ip)
        self.device.setIPPort(1027)
        self.device.setTimeout(500)
        self.device.setMeasurementType('PROG_ASYNC')

        self.device.initialize()

        self.device.setHopRate(self.hop_rate)
        self.device.addPathToMeasure('AVMU_TX_PATH_0', 'AVMU_RX_PATH_1')

        self.device.utilGenerateLinearSweep(startF_mhz=self.start_f, stopF_mhz=self.stop_f, points=self.points)

    async def capture(self, sweep_count):
        # Get the frequency plan that utilGenerateLinearSweep calculated given the
        # hardware constraints.
        frequencies = self.device.getFrequencies()

        # Arm the device
        self.device.start()

        sweeps = []

        # Tell the AVMU to start asynchronous acquisitions.
        self.device.beginAsync()

        # Consume asynchronously generated frequency sweeps
        for _ in range(sweep_count):
            await self.device.measure()
            sweep_data = self.device.extractAllPaths()
            sweeps.append(sweep_data)
            print('Acquired sweep (%s)' % (len(sweeps),))

        # Stop the asynchronous acquisition
        self.device.haltAsync()

        # Finally, disarm the acquisition.
        self.device.stop()

        return sweeps, frequencies
