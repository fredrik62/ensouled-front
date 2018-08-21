import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyHcimComponent } from './monthly-hcim.component';

describe('MonthlyHcimComponent', () => {
  let component: MonthlyHcimComponent;
  let fixture: ComponentFixture<MonthlyHcimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyHcimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyHcimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
