import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiscoresLayoutComponent } from './hiscores-layout.component';

describe('HiscoresLayoutComponent', () => {
  let component: HiscoresLayoutComponent;
  let fixture: ComponentFixture<HiscoresLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiscoresLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiscoresLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
