import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfhoundComponent } from './wolfhound.component';

describe('WolfhoundComponent', () => {
  let component: WolfhoundComponent;
  let fixture: ComponentFixture<WolfhoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WolfhoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WolfhoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
