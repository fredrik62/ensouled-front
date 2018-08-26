import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTwitterDeathsComponent } from './all-twitter-deaths.component';

describe('AllTwitterDeathsComponent', () => {
  let component: AllTwitterDeathsComponent;
  let fixture: ComponentFixture<AllTwitterDeathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTwitterDeathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTwitterDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
