import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardcoreIronmanHighscoreComponent } from './hardcore-ironman-highscore.component';

describe('HardcoreIronmanHighscoreComponent', () => {
  let component: HardcoreIronmanHighscoreComponent;
  let fixture: ComponentFixture<HardcoreIronmanHighscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardcoreIronmanHighscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardcoreIronmanHighscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
