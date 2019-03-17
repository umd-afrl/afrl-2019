import {Injectable} from '@angular/core';
import {WebsocketService} from "./websocket.service";
import {Subject} from "rxjs/index";
import 'rxjs/add/operator/map';

export interface Message {
  message: string;
}

const wsUrl = 'ws://192.168.1.8/';

export interface MovementData {
  movement: number;
  time: number;
}

@Injectable({
	providedIn: 'root'
})
export class MicrowaveService {
	public movementData: Subject<MovementData>;

	constructor(websocket: WebsocketService) {
		this.movementData = <Subject<MovementData>>websocket.connect(wsUrl).map(
			(response: MessageEvent): MovementData => {
				let data = parseInt(response.data);
				return {
					movement: data,
					time: new Date().getTime()
				}
			}
		)
	}
}

