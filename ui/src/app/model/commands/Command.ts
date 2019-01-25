import {NotifierService} from 'angular-notifier';
import {AlertCommand} from './AlertCommand';
import {ToggleCommand} from './ToggleCommand';
import {CommandService} from '../command.service';

export interface Command {
	execute(): void;
}

export class CommandFactory {
	public static createCommand(commandType: string, decodedProto: any, commandService: CommandService,
								notifierService: NotifierService): Command {
		switch (commandType) {
			case ('alert'):
				return new AlertCommand(decodedProto, notifierService);
				break;
			case ('toggle'):
				return new ToggleCommand(decodedProto, commandService);
				break;
			default:
				console.log('Invalid command type: ' + commandType);
		}
	}
}
