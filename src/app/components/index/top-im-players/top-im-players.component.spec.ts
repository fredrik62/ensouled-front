import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopImPlayersComponent } from './top-im-players.component';

describe('TopImPlayersComponent', () => {
  let component: TopImPlayersComponent;
  let fixture: ComponentFixture<TopImPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopImPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopImPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
