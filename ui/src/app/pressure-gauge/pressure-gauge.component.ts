import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-pressure-gauge',
	templateUrl: './pressure-gauge.component.html',
	styleUrls: ['./pressure-gauge.component.css']
})
export class PressureGaugeComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

	gaugeType = 'arch';
	gaugeValue = 400;
	gaugeLabel = 'Pressure';
	gaugeAppendText = 'kPa';
	gaugeMin = '0';
	gaugeMax = '1100';
	gaugeSize = '120'

}
