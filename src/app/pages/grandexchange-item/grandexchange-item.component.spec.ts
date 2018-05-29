import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandexchangeItemComponent } from './grandexchange-item.component';

describe('GrandexchangeItemComponent', () => {
  let component: GrandexchangeItemComponent;
  let fixture: ComponentFixture<GrandexchangeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandexchangeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandexchangeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
