import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeTwitterDeathsComponent } from './three-twitter-deaths.component';

describe('ThreeTwitterDeathsComponent', () => {
  let component: ThreeTwitterDeathsComponent;
  let fixture: ComponentFixture<ThreeTwitterDeathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeTwitterDeathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeTwitterDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
