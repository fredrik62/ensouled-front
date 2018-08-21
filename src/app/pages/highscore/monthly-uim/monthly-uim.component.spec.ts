import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyUimComponent } from './monthly-uim.component';

describe('MonthlyUimComponent', () => {
  let component: MonthlyUimComponent;
  let fixture: ComponentFixture<MonthlyUimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyUimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyUimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
