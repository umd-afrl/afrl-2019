import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {webSocket} from 'rxjs/webSocket';
import {delay, retryWhen, tap} from 'rxjs/operators';

const wsUrl = 'ws://192.168.1.12/';

export interface MovementData {
	movement: number;
}

@Injectable()
export class MicrowaveService {
	socket;
	public movementData = new Subject<MovementData>();

	constructor() {
		this.socket = webSocket({
			url: wsUrl,
			deserializer: ({data}) => parseInt(data)
		}).pipe(
			retryWhen((errors) => {
				return errors.pipe(
					tap(err => console.debug('Microwave socket error, retrying', err)),
					delay(1000)
				)
			}));
		this.socket.subscribe(
			(movement: number) => {
				let data = {movement: movement};
				this.movementData.next(data);
			});
	}
}

