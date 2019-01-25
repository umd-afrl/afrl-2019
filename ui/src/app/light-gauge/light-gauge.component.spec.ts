import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LightGaugeComponent} from './light-gauge.component';

describe('LightGaugeComponent', () => {
	let component: LightGaugeComponent;
	let fixture: ComponentFixture<LightGaugeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LightGaugeComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LightGaugeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
