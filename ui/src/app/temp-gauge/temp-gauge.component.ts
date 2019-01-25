import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-temp-gauge',
	templateUrl: './temp-gauge.component.html',
	styleUrls: ['./temp-gauge.component.css']
})
export class TempGaugeComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

	gaugeType = 'semi';
	gaugeValue = 0;
	gaugeLabel = 'Temperature';
	gaugeAppendText = '°C';
	gaugeMin = '-50';
	gaugeMax = '50';
	gaugeSize = '120';

}
