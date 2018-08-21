import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyIronmanComponent } from './monthly-ironman.component';

describe('MonthlyIronmanComponent', () => {
  let component: MonthlyIronmanComponent;
  let fixture: ComponentFixture<MonthlyIronmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyIronmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyIronmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
