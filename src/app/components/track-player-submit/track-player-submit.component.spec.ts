import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPlayerSubmitComponent } from './track-player-submit.component';

describe('TrackPlayerSubmitComponent', () => {
  let component: TrackPlayerSubmitComponent;
  let fixture: ComponentFixture<TrackPlayerSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackPlayerSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPlayerSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
