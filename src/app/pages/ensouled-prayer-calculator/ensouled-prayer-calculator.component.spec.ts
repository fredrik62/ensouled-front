import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsouledPrayerCalculatorComponent } from './ensouled-prayer-calculator.component';

describe('EnsouledPrayerCalculatorComponent', () => {
  let component: EnsouledPrayerCalculatorComponent;
  let fixture: ComponentFixture<EnsouledPrayerCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsouledPrayerCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsouledPrayerCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
