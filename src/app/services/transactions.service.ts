import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Transaction } from './../models/transaction-global';
import { TransactionsGlobal } from './../mock/transactions-mock';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor( private http: HttpClient ) { }

  private transactionUrl = 'api/transactions';  // URL to web api

  // getTransactionsGlobal(): Transaction[] {
  //   return TransactionsGlobal;
  // }

  getTransactionsGlobal(): Observable<Transaction[]> {
    console.log('ok');
    return this.http.get<Transaction[]>(this.transactionUrl)
  }
}
