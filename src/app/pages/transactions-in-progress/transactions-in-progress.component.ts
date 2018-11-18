import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-in-progress',
  templateUrl: './transactions-in-progress.component.html',
  styleUrls: ['./transactions-in-progress.component.css']
})
export class TransactionsInProgressComponent implements OnInit {
  public link = '/';
  public daysTableView = 3;
  public headerTableLinkExist = false;
  public goBack = true;
  
  public civilite;

  constructor() { }

  ngOnInit() {
  }

}
