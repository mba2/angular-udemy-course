import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBootstrapComponent } from './panel--bootstrap.component';

describe('PanelBootstrapComponent', () => {
  let component: PanelBootstrapComponent;
  let fixture: ComponentFixture<PanelBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
