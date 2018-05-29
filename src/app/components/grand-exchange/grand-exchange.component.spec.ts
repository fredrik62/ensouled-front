import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandExchangeComponent } from './grand-exchange.component';

describe('GrandExchangeComponent', () => {
  let component: GrandExchangeComponent;
  let fixture: ComponentFixture<GrandExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
