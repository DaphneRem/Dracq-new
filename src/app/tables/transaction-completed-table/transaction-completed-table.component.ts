import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer 
} from '@angular/core';
import { Router } from '@angular/router';

import { CustomDatatablesOptions } from '../../custom-datatables/models/custom-datatables-options';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { TransactionsService } from '../../services/transactions.service';
import { Transaction } from '../../models/transaction-global';

import { venteData } from '../../data/fake-data-vente';

@Component({
  selector: 'app-transaction-completed-table',
  templateUrl: './transaction-completed-table.component.html',
  styleUrls: ['./transaction-completed-table.component.css'],
  providers : [
    TransactionsService,
  ]
})
export class TransactionCompletedTableComponent implements AfterViewInit, OnInit {
  @ViewChild('myModal') modal;

  @Input() daysTableView: number;
  @Input() headerTableLinkExist: boolean;
  @Input() headerTableLink?: string;

  public myModal;
  public venteDetails;
  public venteDetailsExit = false;
  public selectedRow;
  public primaryModal;
  public render: boolean;
  public data: Transaction[];

  public dataReady = false;
  public customdatatablesOptions: CustomDatatablesOptions = {
    tableTitle: 'Transactions terminées',
    data: [],
    headerTableLinkExist: false,
    headerTableLink: '',
    customColumn: true,
    columns: [],
    paging: true,
    search: true,
    rowsMax: 10,
    // importantData : [
    //   {
    //     index : 4,
    //     className: 'warning',
    //     cellData: ['Bad Storage']
    //   }
    // ],
    lenghtMenu: [5, 10, 15],
    theme : 'green theme',
    renderOption : true,
    dbClickActionExist: true,
    clickActionExist: true,
    multiSelection: false,
    selectionBtn: true,
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
    private router: Router,
    private renderer: Renderer
  ) {}

  ngOnInit() {
    // this.getTransactionsInProgress(this.daysTableView);
    console.log(this.modal);

    // en attendant les réelle data
    this.customdatatablesOptions.data = venteData;
    this.displayColumns(venteData);
    this.dataReady = true;
    console.log(venteData);
    // -----------------
    
    this.checkDaysViews();
    this.checkLinks();
    this.displayAction();
  }

  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      console.log(event);
      if (event.target.classList.contains('datatbles-modif-btn')) {
        console.log('modif btn clicked');

        // this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }

  openModal(myModal) {
    this.venteDetails = {
      name: 'vente 2'
    };
    return myModal.show()
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
      // this.router.navigate([`/login`]);
      console.log('click action');
      console.log(this.modal);
      this.venteDetailsExit = true;
      this.venteDetails = dataRow;
      this.modal.show();

    };
    this.customdatatablesOptions.clickAction = (dataRow) => {
      console.log('one click');
      this.selectedRow = dataRow;
    }
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

  displayColumns(vente) {
    console.log('data columns :' + vente[0]);
    let that = this;
    this.customdatatablesOptions.columns = [
      {
        title : 'Clerc',
        data : function ( data, type, row, meta ) {
          return data.clerc.personne.nom;
        }
      },
      {
        title : 'Client',
        data : function ( data, type, row, meta ) {
          return data.client.nom;
        }
      },
      {
        title : 'Vendeur',
        data : function ( data, type, row, meta ) {
          return data.vendeur.nom;
        }
      },
      {
        title : 'Acquéreur',
        data : function ( data, type, row, meta ) {
          return data.acquereur.nom;
        }
      },
      {
        title : 'Portefeuille',
        data : function ( data, type, row, meta ) { // repoName ?
          return data.acquereur.nom;
        }
      },
      {
        title : 'Biens',
        data : function ( data, type, row, meta ) { // adresses
          return data.biens; //  (array)
        }
      },
      {
        title : 'Signature',
        data : function ( data, type, row, meta ) {
          return data.datesignature;
        }
      },
      {
        title : 'Confrère',
        data : function ( data, type, row, meta ) {
          return data.confrere.nom;
        }
      },
      {
        title : 'Type DR',
        data : function ( data, type, row, meta ) { // typeDR
          return data.datarooms; // (array)
        }
      },
      {
        title: 'Action',
        data: function (data, type, row, meta) {
        data = `<button type="button" class="btn btn-primary datatbles-modif-btn" data-toggle="modal">Détails</button>`;
          return data;
        }
      }
      // {
      //   title: '',
      //   data: 'typeDR',
      //   render: function (data: any, type: any, full: any) {
      //     data = `<button type="button" class="btn btn-primary" data-toggle="modal" routerLink="/login" (click)="primaryModal.show()">Détails</button>`;
      //     return data;
      //   }
      // }
    ];
  }
}
