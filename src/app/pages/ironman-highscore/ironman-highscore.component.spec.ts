import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronmanHighscoreComponent } from './ironman-highscore.component';

describe('IronmanHighscoreComponent', () => {
  let component: IronmanHighscoreComponent;
  let fixture: ComponentFixture<IronmanHighscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IronmanHighscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronmanHighscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
