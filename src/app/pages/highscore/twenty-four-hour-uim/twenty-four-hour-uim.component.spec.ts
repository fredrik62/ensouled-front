import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyFourHourUimComponent } from './twenty-four-hour-uim.component';

describe('TwentyFourHourUimComponent', () => {
  let component: TwentyFourHourUimComponent;
  let fixture: ComponentFixture<TwentyFourHourUimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyFourHourUimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyFourHourUimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
