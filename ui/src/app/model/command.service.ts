import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {WebsocketService} from '../websocket.service';
import {load, Root} from 'protobufjs';
import {HUDModel} from './HUDModel';
import {NotifierService} from 'angular-notifier';
import {CommandFactory} from './commands/Command';

@Injectable({
	providedIn: 'root'
})
export class CommandService {

	constructor(websocket: WebsocketService, private notifierService: NotifierService) {
		console.log('Initializing CommandService...');
		load('assets/protos/commands.proto', (error, root) => {
			if (error) {
				console.log('failed to load .proto');
				throw error;
			}
			this.protoRoot = root;
			this.commandMessage = root.lookupType('Command');
			console.log('Loaded protobuf definition:', this.commandMessage);
			// If we're on Github Pages don't initialize WS
			if (!(location.hostname.includes('github'))) {
				const wsUrl = 'ws://' + location.host + '/ws';
				this.socket = websocket.connect(wsUrl);
				this.socket.subscribe((msg: MessageEvent) => {
					this.parseMessage(msg);
				});
			}
			// for (const bs of this.model.observables
			// ) {
			// 	bs.subscribe(() => {
			// 		this.composeMessage(bs.getValue());
			// 	});
			// }
		});
	}

	private socket: Subject<MessageEvent>;
	private protoRoot: Root;
	private commandMessage;
	public hudModel = new HUDModel();

	private parseMessage(msg: MessageEvent): void {
		const decoded = this.commandMessage.decode(new Uint8Array(msg.data));
		console.log('Decoded IncomingCommand message:', decoded);
		CommandFactory.createCommand(decoded.commandType, decoded, this, this.notifierService).execute();
	}

	public composeMessage(commandType: string, args: any): void {
		//console.log('compose message: ' + source);
		// Exemplary payload
		let payload = {button: args};

		// Verify the payload if necessary (i.e. when possibly incomplete or invalid)
		//var errMsg = this.commandMessage.verify(payload);
		//if (errMsg)
		//	throw Error(errMsg);

		// Create a new message
		this.socket.next(new MessageEvent("text", {data: this.commandMessage.encode(this.commandMessage.create(payload)).finish()}));
	}
}
