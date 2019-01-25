import {Component, OnInit} from '@angular/core';
import {Options} from 'ng5-slider';

@Component({
	selector: 'app-light-slider',
	templateUrl: './light-slider.component.html',
	styleUrls: ['./light-slider.component.css']
})
export class LightSliderComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

	value: number = 0;
	options: Options = {
		floor: 0,
		ceil: 100,
		step: 25,
		ticksArray: [0, 25, 50, 75, 100]
	};
}

