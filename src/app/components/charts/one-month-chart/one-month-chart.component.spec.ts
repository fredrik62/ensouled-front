import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMonthChartComponent } from './one-month-chart.component';

describe('OneMonthChartComponent', () => {
  let component: OneMonthChartComponent;
  let fixture: ComponentFixture<OneMonthChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneMonthChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMonthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
