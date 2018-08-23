import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHcimPlayersComponent } from './top-hcim-players.component';

describe('TopHcimPlayersComponent', () => {
  let component: TopHcimPlayersComponent;
  let fixture: ComponentFixture<TopHcimPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHcimPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHcimPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
