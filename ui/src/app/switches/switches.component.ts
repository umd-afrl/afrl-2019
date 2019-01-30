import {Component, OnInit} from '@angular/core';
import {CommandService} from '../model/command.service';

@Component({
	selector: 'app-switches',
	templateUrl: './switches.component.html',
	styleUrls: ['./switches.component.css']
})

export class SwitchesComponent implements OnInit {

	switchState: { [name: string]: boolean };

	constructor(private commandService: CommandService) {
		this.commandService = commandService;
	}

	changeState() {
		this.commandService.hudModel.toggles.next(this.switchState);
		// this.service.execCommand(new IncomingToggleCommand(index));
	}

	ngOnInit() {
		this.commandService.hudModel.toggles.subscribe((switches) => {
			this.switchState = switches;
		});
	}
}
