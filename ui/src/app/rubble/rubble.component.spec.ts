import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubbleComponent } from './rubble.component';

describe('RubbleComponent', () => {
  let component: RubbleComponent;
  let fixture: ComponentFixture<RubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
