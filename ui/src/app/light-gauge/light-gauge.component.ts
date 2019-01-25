import {Component, OnInit} from '@angular/core';
import {CommandService} from '../model/command.service';

@Component({
	selector: 'app-light-gauge',
	templateUrl: './light-gauge.component.html',
	styleUrls: ['./light-gauge.component.css']
})
export class LightGaugeComponent implements OnInit {

	constructor(private commandService: CommandService) {
		this.commandService = commandService;
	}

	ngOnInit() {
	}

	gaugeType = 'semi';
	gaugeValue = 45;
	gaugeLabel = 'Light';
	gaugeAppendText = '%';
	gaugeMin = '0';
	gaugeMax = '100';
	gaugeSize = '80';

}
