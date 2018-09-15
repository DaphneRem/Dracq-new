import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-completed-page',
  templateUrl: './transactions-completed-page.component.html',
  styleUrls: ['./transactions-completed-page.component.css']
})
export class TransactionsCompletedPageComponent implements OnInit {
  public link = '/';
  public daysTableView = 3;
  public headerTableLinkExist = false;
  public goBack = true;

  constructor() { }

  ngOnInit() {
  }

}
