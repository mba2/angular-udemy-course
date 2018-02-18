import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingDataAsyncComponent } from './reading-data-async.component';

describe('ReadingDataAsyncComponent', () => {
  let component: ReadingDataAsyncComponent;
  let fixture: ComponentFixture<ReadingDataAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingDataAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingDataAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
