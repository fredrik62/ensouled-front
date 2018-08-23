import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRegPlayersComponent } from './top-reg-players.component';

describe('TopRegPlayersComponent', () => {
  let component: TopRegPlayersComponent;
  let fixture: ComponentFixture<TopRegPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRegPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRegPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
