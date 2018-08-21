import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyHcimComponent } from './weekly-hcim.component';

describe('WeeklyHcimComponent', () => {
  let component: WeeklyHcimComponent;
  let fixture: ComponentFixture<WeeklyHcimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyHcimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyHcimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
