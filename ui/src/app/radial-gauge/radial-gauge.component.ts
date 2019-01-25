import {Component, Input, OnInit} from '@angular/core';
import 'canvas-gauges';

@Component({
	selector: 'app-radial-gauge',
	templateUrl: './radial-gauge.component.html',
	styleUrls: ['./radial-gauge.component.css']
})
export class RadialGaugeComponent implements OnInit {

	@Input() title = 'Default';
	@Input() dataMin = '0';
	@Input() dataMax = '100';

	constructor() {
	}

	ngOnInit() {
	}

}
