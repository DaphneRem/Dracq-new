import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from '@angular/core';
import { Router } from '@angular/router';

import { CustomDatatablesOptions } from '../../custom-datatables/models/custom-datatables-options';

import { TransactionsService } from '../../services/transactions.service';
import { Transaction } from '../../models/transaction-global';

@Component({
  selector: 'app-transaction-in-progress-table',
  templateUrl: './transaction-in-progress-table.component.html',
  styleUrls: ['./transaction-in-progress-table.component.css'],
  providers : [
    TransactionsService
  ]
})
export class TransactionInProgressTableComponent implements OnInit {
  
    @Input() daysTableView: number;
    @Input() headerTableLinkExist: boolean;
    @Input() headerTableLink?: string;
  
    public render: boolean;
    public data: Transaction[];
  
    public dataReady = false;
    public customdatatablesOptions: CustomDatatablesOptions = {
      tableTitle: 'Transactions en cours',
      data: [],
      headerTableLinkExist: false,
      headerTableLink: '',
      customColumn: true,
      columns: [],
      paging: true,
      search: true,
      rowsMax: 10,
      importantData : [
        {
          index : 4,
          className: 'warning',
          cellData: ['Bad Storage']
        }
      ],
      lenghtMenu: [5, 10, 15],
      theme : 'blue theme',
      renderOption : true,
      dbClickActionExist: true,
      buttons: {
        buttons: true,
        allButtons: true,
        colvisButtonExiste: true,
        copyButtonExiste: true,
        printButtonExiste: true,
        excelButtonExiste: true,
      }
    };
  
    constructor(
      private transactionService: TransactionsService,
      private router: Router
    ) {}
  
    ngOnInit() {
      this.getTransactionsInProgress(this.daysTableView);
      this.checkDaysViews();
      this.checkLinks();
      this.displayAction();
    }
  
    rerender(event) {
      this.render = event;
      // this.getTransactionsInProgress(this.daysTableView);
      console.log(this.render);
    }
  
    checkLinks() {
      this.customdatatablesOptions.headerTableLinkExist = this.headerTableLinkExist;
      if (this.headerTableLinkExist) {
        this.customdatatablesOptions.headerTableLink = this.headerTableLink;
      }
    }
  
    displayAction() {
      this.customdatatablesOptions.dbClickAction = (dataRow) => {
        // this.router.navigate([`/detail-file/support/${dataRow.id}/seg/${dataRow.noseg}`]);
        console.log('click action');
      };
      this.customdatatablesOptions.tooltipHeader = 'Double cliquer sur un fichier pour avoir une vue détaillée';
    }
  
    checkDaysViews() {
      if (this.daysTableView === 1) {
        this.customdatatablesOptions.paging = true;
        this.customdatatablesOptions.search = true;
      } else {
        this.customdatatablesOptions.rowsMax = 15;
      }
    }
  
    checkDataReady() {
      return this.dataReady;
    }
  
    getTransactionsInProgress(e: number) {
      this.transactionService
        .getTransactionsGlobal()
        .subscribe(data => {
          this.data = data;
          console.log(data);
          if (!data) {
            this.customdatatablesOptions.data = [];
          } else {
            this.customdatatablesOptions.data = data;
          }
          this.dataReady = true;
          this.displayColumns(data);
        });
    }
  
    displayColumns(data) {
      console.log('data columns :' + data[0]);
      this.customdatatablesOptions.columns = [
        {
          title : 'Clerc',
          data : 'clerc',
        },
        {
          title : 'Client',
          data : 'client',
        },
        {
          title : 'Vendeur',
          data : 'sellerName',
        },
        {
          title : 'Acquéreur',
          data : 'buyerName'
        },
        {
          title : 'Portefeuille',
          data : 'RepoName'
        },
        {
          title : 'Biens',
          data : 'address'
        },
        {
          title : 'Signature',
          data : 'signatureDate'
        },
        {
          title : 'Confrère',
          data : 'dataRoomCreator'
        },
        {
          title : 'Type DR',
          data : 'typeDR'
        },
      ];
    }
}
