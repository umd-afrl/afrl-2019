import {Injectable} from '@angular/core';
import {WebsocketService} from './websocket.service';
import {Subject} from 'rxjs';
import {bufferTime, zip} from 'rxjs/operators';

const wsUrl = 'ws://192.168.1.12:/';

export interface MovementData {
	movement: number;
	time: number;
}

@Injectable()
export class MicrowaveService {
	socket: Subject<MessageEvent>;
	public movementData = new Subject<MovementData>();

	constructor(private websocket: WebsocketService) {
		this.socket = websocket.connect(wsUrl);
		this.socket.pipe(bufferTime(500), zip((buffer: MessageEvent[]): MovementData => {
			for (let msg of buffer) {
				if (msg.data.movement == 1) {
					return {movement: 1, time: 0};
				} else {
					return {movement: 0, time: 0};
				}
			}
		})).subscribe(
			(response: MovementData) => {
				this.movementData.next(response);
			});
	}
}

