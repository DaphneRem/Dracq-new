import { Component, OnInit } from '@angular/core';
import { CiviliteService } from '../../services/civilite.service';

@Component({
  selector: 'app-transactions-in-progress',
  templateUrl: './transactions-in-progress.component.html',
  styleUrls: ['./transactions-in-progress.component.css'],
  providers : [
    CiviliteService
  ]
})
export class TransactionsInProgressComponent implements OnInit {
  public link = '/';
  public daysTableView = 3;
  public headerTableLinkExist = false;
  public goBack = true;
  
  public civilite;

  constructor(
    private civiliteService: CiviliteService
  ) { }

  ngOnInit() {
    this.getCivilite();
  }

  getCivilite() {
    this.civiliteService.getCivilite()
      .subscribe(data => {
        this.civilite = data;
        console.log(data);
      })
  }

}
