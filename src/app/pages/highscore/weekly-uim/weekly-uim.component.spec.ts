import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyUimComponent } from './weekly-uim.component';

describe('WeeklyUimComponent', () => {
  let component: WeeklyUimComponent;
  let fixture: ComponentFixture<WeeklyUimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyUimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyUimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
