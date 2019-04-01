import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {webSocket} from 'rxjs/webSocket';
import {delay, retryWhen, tap} from 'rxjs/operators';

const wsUrl = 'ws://192.168.1.6:8090/';

export interface WolfhoundData {
	frequency: number;
	signal_strength: number;
}

@Injectable()
export class WolfhoundService {
	socket;
	public wolfhoundData = new Subject<WolfhoundData>();

	constructor() {
		this.socket = webSocket(wsUrl).pipe(
			retryWhen((errors) => {
				return errors.pipe(
					tap(err => console.debug('Wolfhound socket error, retrying', err)),
					delay(1000)
				)
			}));
		this.socket.subscribe(
			(data: WolfhoundData) => {
				this.wolfhoundData.next(data);
			}
		);
	}
}
