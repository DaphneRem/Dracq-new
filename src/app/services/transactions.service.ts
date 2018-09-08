import { Injectable } from '@angular/core';

import { Transaction } from './../models/transaction-global';
import { TransactionsGlobal } from './../mock/transactions-mock';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  getTransactionsGlobal(): Transaction[] {
    return TransactionsGlobal;
  }
}
