import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCreationComponent } from './transaction-creation.component';

describe('TransactionCreationComponent', () => {
  let component: TransactionCreationComponent;
  let fixture: ComponentFixture<TransactionCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
