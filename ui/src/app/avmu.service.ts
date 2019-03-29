import {Injectable} from '@angular/core';
import {WebsocketService} from './websocket.service';
import {Subject} from 'rxjs';
import 'rxjs/add/operator/map';

const wsUrl = 'ws://192.168.1.7:8008/';

export interface RadarData {
	magnitude: number[];
	peaks: number[];
}

@Injectable()
export class AvmuService {
	socket: Subject<MessageEvent>;
	public radarData = new Subject<RadarData>();

	constructor(private websocket: WebsocketService) {
		this.socket = websocket.connect(wsUrl);
		this.socket.subscribe(
			(response: MessageEvent) => {
				let data = JSON.parse(response.data);
				this.radarData.next({magnitude: data[0][0], peaks: data[1]});
			}
		);
	}
}
