import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighAlchPriceComponent } from './high-alch-price.component';

describe('HighAlchPriceComponent', () => {
  let component: HighAlchPriceComponent;
  let fixture: ComponentFixture<HighAlchPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighAlchPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighAlchPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
