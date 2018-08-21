import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyFourHourIronmanComponent } from './twenty-four-hour-ironman.component';

describe('TwentyFourHourIronmanComponent', () => {
  let component: TwentyFourHourIronmanComponent;
  let fixture: ComponentFixture<TwentyFourHourIronmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyFourHourIronmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyFourHourIronmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
