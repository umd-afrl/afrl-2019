import {Injectable} from '@angular/core';
import {WebsocketService} from './websocket.service';
import {Subject} from 'rxjs';
import 'rxjs/add/operator/map';

const wsUrl = 'ws://192.168.1.9:/';

export interface MovementData {
	movement: number;
	time: number;
}

@Injectable({
	providedIn: 'root'
})
export class MicrowaveService {
	public movementData: Subject<MovementData>;

	constructor(private websocket: WebsocketService) {
		this.movementData = <Subject<MovementData>>websocket.connect(wsUrl).map(
			(response: MessageEvent): MovementData => {
				let data = parseInt(response.data);
				return {
					movement: data,
					time: new Date().getTime()
				}
			}
		);
	}
}

