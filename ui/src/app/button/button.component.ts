import {Component, Input, OnInit} from '@angular/core';
import {CommandService} from '../model/command.service';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
	@Input()
	title: string;

	@Input()
	target: string;

	constructor(private commandService: CommandService) {
	}

	onClick() {
		this.commandService.composeMessage('button', this.target)
	}

	ngOnInit() {
	}

}
