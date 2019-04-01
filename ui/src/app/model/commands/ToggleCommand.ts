import {IncomingCommand} from './Command';
import {CommandService} from '../command.service';

export class IncomingToggleCommand implements IncomingCommand {
	private readonly toggleName: string;
	private readonly newState: boolean;

	constructor(private decodedProto: any, private commandService: CommandService) {
		this.toggleName = decodedProto.toggle.name;
		this.newState = decodedProto.toggle.value;
	}

	execute(): void {
		const newStates = this.commandService.hudModel.toggles.getValue();
		newStates[this.toggleName] = this.newState;
		this.commandService.hudModel.toggles.next(newStates);
	}
}

// export class OutgoingToggleCommand implements OutgoingCommand {
//
// 	constructor(private commandMessage: any, private commandType: string, private fields: { [name: string]: any }) {
// 	}
//
// 	createSubmessage(): void {
// 		let payload = ​{ name: "Lights", value: true };
//
// 		this.commandMessage.encode(this.commandMessage.create(payload)).finish()
// 	}
//
// }
