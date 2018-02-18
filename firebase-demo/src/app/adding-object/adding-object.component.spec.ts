import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingObjectComponent } from './adding-object.component';

describe('AddingObjectComponent', () => {
  let component: AddingObjectComponent;
  let fixture: ComponentFixture<AddingObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
