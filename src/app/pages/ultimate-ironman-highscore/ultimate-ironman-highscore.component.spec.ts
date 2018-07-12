import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateIronmanHighscoreComponent } from './ultimate-ironman-highscore.component';

describe('UltimateIronmanHighscoreComponent', () => {
  let component: UltimateIronmanHighscoreComponent;
  let fixture: ComponentFixture<UltimateIronmanHighscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimateIronmanHighscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateIronmanHighscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
