import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-battery-gauge',
	templateUrl: './battery-gauge.component.html',
	styleUrls: ['./battery-gauge.component.css']
})
export class BatteryGaugeComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

	gaugeType = 'semi';
	gaugeValue = 70;
	gaugeAppendText = '%';
	gaugeMin = '0';
	gaugeMax = '100';
	gaugeSize = '80';

	thresholdConfig = {
		'75': {color: 'green'},
		'50': {color: 'orange'},
		'25': {color: 'red'}
	};

}
