import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyRegComponent } from './weekly-reg.component';

describe('WeeklyRegComponent', () => {
  let component: WeeklyRegComponent;
  let fixture: ComponentFixture<WeeklyRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
