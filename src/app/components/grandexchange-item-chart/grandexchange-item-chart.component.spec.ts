import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandexchangeItemChartComponent } from './grandexchange-item-chart.component';

describe('GrandexchangeItemChartComponent', () => {
  let component: GrandexchangeItemChartComponent;
  let fixture: ComponentFixture<GrandexchangeItemChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandexchangeItemChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandexchangeItemChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
