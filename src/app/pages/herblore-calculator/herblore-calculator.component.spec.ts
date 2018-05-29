import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbloreCalculatorComponent } from './herblore-calculator.component';

describe('HerbloreCalculatorComponent', () => {
  let component: HerbloreCalculatorComponent;
  let fixture: ComponentFixture<HerbloreCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbloreCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbloreCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
