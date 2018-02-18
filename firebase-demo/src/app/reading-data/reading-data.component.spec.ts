import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingDataComponent } from './reading-data.component';

describe('ReadingDataComponent', () => {
  let component: ReadingDataComponent;
  let fixture: ComponentFixture<ReadingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
