import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionModificationComponent } from './transaction-modification.component';

describe('TransactionModificationComponent', () => {
  let component: TransactionModificationComponent;
  let fixture: ComponentFixture<TransactionModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
