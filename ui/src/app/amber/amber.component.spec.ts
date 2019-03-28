import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmberComponent } from './amber.component';

describe('AmberComponent', () => {
  let component: AmberComponent;
  let fixture: ComponentFixture<AmberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
