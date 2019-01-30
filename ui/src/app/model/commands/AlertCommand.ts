import {IncomingCommand} from './Command';
import {NotifierService} from 'angular-notifier';

export class AlertCommand implements IncomingCommand {

	readonly message: string;
	readonly level: number;

	constructor(private decodedProto: any, private notifierService: NotifierService) {
		this.message = this.decodedProto.alert.alertText;
		this.level = this.decodedProto.alert.alertLevel;
	}

	public execute(): void {
		switch (this.level) {
			case (0):
				this.notifierService.notify('error', this.message);
				break;
			case (1):
				this.notifierService.notify('warning', this.message);
				break;
			case (2):
				this.notifierService.notify('info', this.message);
				break;
			case (4):
				this.notifierService.notify('success', this.message);
				break;
			default:
				this.notifierService.notify('default', this.message);
				break;
		}
	}
}
