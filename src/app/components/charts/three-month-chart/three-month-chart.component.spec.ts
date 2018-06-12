import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeMonthChartComponent } from './three-month-chart.component';

describe('ThreeMonthChartComponent', () => {
  let component: ThreeMonthChartComponent;
  let fixture: ComponentFixture<ThreeMonthChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeMonthChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeMonthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
