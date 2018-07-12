import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularPlayerHighscoreComponent } from './regular-player-highscore.component';

describe('RegularPlayerHighscoreComponent', () => {
  let component: RegularPlayerHighscoreComponent;
  let fixture: ComponentFixture<RegularPlayerHighscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularPlayerHighscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularPlayerHighscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
