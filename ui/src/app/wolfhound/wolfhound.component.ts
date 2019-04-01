import {Component, OnInit} from '@angular/core';
import {WolfhoundService} from '../wolfhound.service';

@Component({
	selector: 'app-wolfhound',
	templateUrl: './wolfhound.component.html',
	styleUrls: ['./wolfhound.component.css'],
	providers: [WolfhoundService]
})
export class WolfhoundComponent implements OnInit {
	frequency: number = 0;
	signal_strength: number = 0;

	constructor(private wolfhoundService: WolfhoundService) {
	}

	ngOnInit() {
		this.wolfhoundService.wolfhoundData.subscribe((newData) => {
			this.frequency = newData.frequency;
			this.signal_strength = newData.signal_strength;
		});
	}

}
