import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHcimDeathsComponent } from './find-hcim-deaths.component';

describe('FindHcimDeathsComponent', () => {
  let component: FindHcimDeathsComponent;
  let fixture: ComponentFixture<FindHcimDeathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindHcimDeathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindHcimDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
