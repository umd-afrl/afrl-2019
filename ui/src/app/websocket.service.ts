import {Injectable} from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';
export class WebsocketService {
	constructor() {
	}

	private subject: Subject<MessageEvent>;

	public connect(url): Subject<MessageEvent> {
		if (!this.subject) {
			this.subject = this.create(url);
		}
		return this.subject;
	}

	private create(url): Subject<MessageEvent> {
		const ws = new WebSocket(url);
		ws.binaryType = 'arraybuffer';
		console.log('Websocket created');

		const observable = Observable.create(
			(obs: Observer<MessageEvent>) => {
				ws.onmessage = obs.next.bind(obs);
				ws.onerror = obs.error.bind(obs);
				ws.onclose = obs.complete.bind(obs);
				return ws.close.bind(ws);
			});

		const observer = {
			next: (data: MessageEvent) => {
				if (ws.readyState === WebSocket.OPEN) {
					console.log('Outgoing WS message:', data);
					ws.send(data.data);
				}
			}
		};

		return Subject.create(observer, observable);
	}

}
