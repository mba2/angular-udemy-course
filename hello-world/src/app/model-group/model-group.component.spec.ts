import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelGroupComponent } from './model-group.component';

describe('ModelGroupComponent', () => {
  let component: ModelGroupComponent;
  let fixture: ComponentFixture<ModelGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
