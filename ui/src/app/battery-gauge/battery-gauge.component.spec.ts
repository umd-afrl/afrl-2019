import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BatteryGaugeComponent} from './battery-gauge.component';

describe('BatteryGaugeComponent', () => {
	let component: BatteryGaugeComponent;
	let fixture: ComponentFixture<BatteryGaugeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BatteryGaugeComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BatteryGaugeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
