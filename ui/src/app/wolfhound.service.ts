import {Injectable} from '@angular/core';
import {WebsocketService} from './websocket.service';
import {Subject} from 'rxjs';
import 'rxjs/add/operator/map';

const wsUrl = 'ws://192.168.1.13:/';

export interface WolfhoundData {
	signalStrength: number;
}

@Injectable( )
export class WolfhoundService {
	socket: Subject<MessageEvent>;
	public wolfhoundData = new Subject<WolfhoundData>();

  constructor(private websocket: WebsocketService) {
		this.socket = websocket.connect(wsUrl);
		this.socket.subscribe(
			(response: MessageEvent) => {
				let input = parseInt(response.data);
				this.wolfhoundData.next({
					signalStrength: input
				});
			}
		);
	}
}
