import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyFourHourRegComponent } from './twenty-four-hour-reg.component';

describe('TwentyFourHourRegComponent', () => {
  let component: TwentyFourHourRegComponent;
  let fixture: ComponentFixture<TwentyFourHourRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyFourHourRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyFourHourRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
