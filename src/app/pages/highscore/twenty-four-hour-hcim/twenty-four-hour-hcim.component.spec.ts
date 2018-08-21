import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyFourHourHcimComponent } from './twenty-four-hour-hcim.component';

describe('TwentyFourHourHcimComponent', () => {
  let component: TwentyFourHourHcimComponent;
  let fixture: ComponentFixture<TwentyFourHourHcimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyFourHourHcimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyFourHourHcimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
