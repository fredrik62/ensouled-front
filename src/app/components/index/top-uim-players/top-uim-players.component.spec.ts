import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUimPlayersComponent } from './top-uim-players.component';

describe('TopUimPlayersComponent', () => {
  let component: TopUimPlayersComponent;
  let fixture: ComponentFixture<TopUimPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopUimPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUimPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
