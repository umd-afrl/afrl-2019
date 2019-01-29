import {BehaviorSubject, Observable, Observer, Subject} from 'rxjs';

export class HUDModel {
	// Unidirectional Server to Client values
	public alert: BehaviorSubject<string>;
	public depth: BehaviorSubject<number>;
	public heading: BehaviorSubject<number>;

	// Unidirectional Client to Server values
	public lightIntensity: BehaviorSubject<number>;

	//ToDo make behavior subject <image>, write image command, have component that watches behavior for changes to make picture changes
	public imageChange : BehaviorSubject<{[image: string]: boolean}>;

	// Bidirectional values
	public toggles: BehaviorSubject<{[name: string]: boolean}>;

	constructor() {
		this.alert = new BehaviorSubject('');

		this.depth = new BehaviorSubject(50);

		this.heading = new BehaviorSubject(180);

		this.lightIntensity = new BehaviorSubject(.75);

		this.toggles = new BehaviorSubject({['Lights']: false, ['Toggle 2']: false, ['Toggle 3']: false, ['Toggle 4']: false});

		this.imageChange = new BehaviorSubject({['Lights']: false});
	}
}
