import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThrusterGaugeComponent} from './thruster-gauge.component';

describe('ThrusterGaugeComponent', () => {
	let component: ThrusterGaugeComponent;
	let fixture: ComponentFixture<ThrusterGaugeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ThrusterGaugeComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ThrusterGaugeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
