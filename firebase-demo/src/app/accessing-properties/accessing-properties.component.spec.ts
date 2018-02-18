import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessingPropertiesComponent } from './accessing-properties.component';

describe('AccessingPropertiesComponent', () => {
  let component: AccessingPropertiesComponent;
  let fixture: ComponentFixture<AccessingPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessingPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessingPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
