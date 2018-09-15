import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCompletedTableComponent } from './transaction-completed-table.component';

describe('TransactionCompletedTableComponent', () => {
  let component: TransactionCompletedTableComponent;
  let fixture: ComponentFixture<TransactionCompletedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionCompletedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCompletedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
