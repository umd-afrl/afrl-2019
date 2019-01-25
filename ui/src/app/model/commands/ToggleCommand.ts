import {Command} from './Command';
import {CommandService} from '../command.service';

export class ToggleCommand implements Command {
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
