import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithArraysComponent } from './form-with-arrays.component';

describe('FormWithArraysComponent', () => {
  let component: FormWithArraysComponent;
  let fixture: ComponentFixture<FormWithArraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithArraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
