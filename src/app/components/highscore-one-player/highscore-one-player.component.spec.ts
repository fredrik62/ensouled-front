import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscoreOnePlayerComponent } from './highscore-one-player.component';

describe('HighscoreOnePlayerComponent', () => {
  let component: HighscoreOnePlayerComponent;
  let fixture: ComponentFixture<HighscoreOnePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighscoreOnePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscoreOnePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
