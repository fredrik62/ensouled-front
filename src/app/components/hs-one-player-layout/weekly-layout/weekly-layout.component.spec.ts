import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyLayoutComponent } from './weekly-layout.component';

describe('WeeklyLayoutComponent', () => {
  let component: WeeklyLayoutComponent;
  let fixture: ComponentFixture<WeeklyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
