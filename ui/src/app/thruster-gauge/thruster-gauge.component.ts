import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-thruster-gauge',
	templateUrl: './thruster-gauge.component.html',
	styleUrls: ['./thruster-gauge.component.css']
})
export class ThrusterGaugeComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

	gaugeType = 'semi';
	gaugeValue = 45;
	gaugeLabel = 'Thruster';
	gaugeAppendText = '%';
	gaugeMin = '0';
	gaugeMax = '100';
	gaugeSize = '120';

}
