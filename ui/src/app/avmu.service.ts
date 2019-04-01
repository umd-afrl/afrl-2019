import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {webSocket} from 'rxjs/webSocket';
import {delay, retryWhen, tap} from 'rxjs/operators'

const wsUrl = 'ws://192.168.1.7:8080/ws';

export interface RadarData {
	magnitude: number[];
	peaks: number[];
}

@Injectable()
export class AvmuService {
	socket;
	public radarData = new Subject<RadarData>();

	constructor() {
		this.socket = webSocket(wsUrl).pipe(
			retryWhen((errors) => {
				return errors.pipe(
					tap(err => console.debug('AVMU socket error, retrying', err)),
					delay(1000)
				)
			}));
		this.socket.subscribe(
			(data: RadarData) => {
				this.radarData.next({magnitude: data[0][0], peaks: data[1]});
			}
		);
	}
}
