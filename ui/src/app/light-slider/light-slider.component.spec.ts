import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LightSliderComponent} from './light-slider.component';

describe('LightSliderComponent', () => {
	let component: LightSliderComponent;
	let fixture: ComponentFixture<LightSliderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LightSliderComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LightSliderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
