import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsCompletedPageComponent } from './transactions-completed-page.component';

describe('TransactionsCompletedPageComponent', () => {
  let component: TransactionsCompletedPageComponent;
  let fixture: ComponentFixture<TransactionsCompletedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsCompletedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsCompletedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
