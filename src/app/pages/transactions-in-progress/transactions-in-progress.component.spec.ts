import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsInProgressComponent } from './transactions-in-progress.component';

describe('TransactionsInProgressComponent', () => {
  let component: TransactionsInProgressComponent;
  let fixture: ComponentFixture<TransactionsInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
