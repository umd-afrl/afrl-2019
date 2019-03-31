import {Injectable} from '@angular/core';
import {WebsocketService} from './websocket.service';
import {Subject} from 'rxjs';
import 'rxjs/add/operator/map';

const wsUrl = 'ws://192.168.1.12/';

export interface MovementData {
	movement: number;
}

@Injectable()
export class MicrowaveService {
	socket: Subject<MessageEvent>;
	public movementData = new Subject<MovementData>();

	constructor(private websocket: WebsocketService) {
		this.socket = websocket.connect(wsUrl);
		this.socket.subscribe(
		(response: MessageEvent) => {
			let data = parseInt(response.data);
			this.movementData.next({
				movement: data,
			});
		});
	}
}

