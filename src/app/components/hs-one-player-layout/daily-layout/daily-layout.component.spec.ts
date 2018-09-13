import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyLayoutComponent } from './daily-layout.component';

describe('DailyLayoutComponent', () => {
  let component: DailyLayoutComponent;
  let fixture: ComponentFixture<DailyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
