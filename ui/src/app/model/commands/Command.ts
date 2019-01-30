import {NotifierService} from 'angular-notifier';
import {AlertCommand} from './AlertCommand';
import {IncomingToggleCommand} from './ToggleCommand';
import {CommandService} from '../command.service';

export interface IncomingCommand {
	execute(): void;
}

export interface OutgoingCommand {
	createProto(): void;
}

export class CommandFactory {
	public static createCommand(commandType: string, decodedProto: any, commandService: CommandService,
								notifierService: NotifierService): IncomingCommand {
		switch (commandType) {
			case ('alert'):
				return new AlertCommand(decodedProto, notifierService);
				break;
			case ('toggle'):
				return new IncomingToggleCommand(decodedProto, commandService);
				break;
			default:
				console.log('Invalid command type: ' + commandType);
		}
	}
}
