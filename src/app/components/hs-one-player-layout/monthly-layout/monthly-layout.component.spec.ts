import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyLayoutComponent } from './monthly-layout.component';

describe('MonthlyLayoutComponent', () => {
  let component: MonthlyLayoutComponent;
  let fixture: ComponentFixture<MonthlyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
