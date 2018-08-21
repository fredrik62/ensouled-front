import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRegComponent } from './monthly-reg.component';

describe('MonthlyRegComponent', () => {
  let component: MonthlyRegComponent;
  let fixture: ComponentFixture<MonthlyRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
