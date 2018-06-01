import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighAlchChartComponent } from './high-alch-chart.component';

describe('HighAlchChartComponent', () => {
  let component: HighAlchChartComponent;
  let fixture: ComponentFixture<HighAlchChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighAlchChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighAlchChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
