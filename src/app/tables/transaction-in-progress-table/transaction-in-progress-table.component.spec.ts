import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionInProgressTableComponent } from './transaction-in-progress-table.component';

describe('TransactionInProgressTableComponent', () => {
  let component: TransactionInProgressTableComponent;
  let fixture: ComponentFixture<TransactionInProgressTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionInProgressTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionInProgressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
