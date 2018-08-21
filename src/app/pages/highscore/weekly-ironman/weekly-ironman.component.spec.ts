import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyIronmanComponent } from './weekly-ironman.component';

describe('WeeklyIronmanComponent', () => {
  let component: WeeklyIronmanComponent;
  let fixture: ComponentFixture<WeeklyIronmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyIronmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyIronmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
