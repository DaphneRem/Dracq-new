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

import { Store } from '@ngrx/store';
import { SelectedVente } from '../../+state/+selected-vente/selected-vente.interface';

import { CustomDatatablesOptions } from '../../custom-datatables/models/custom-datatables-options';

import { TransactionsService } from '../../services/transactions.service';
import { Transaction } from '../../models/transaction-global';

import { venteData } from '../../data/fake-data-vente';

@Component({
  selector: 'app-transaction-in-progress-table',
  templateUrl: './transaction-in-progress-table.component.html',
  styleUrls: ['./transaction-in-progress-table.component.css'],
  providers: [
    TransactionsService,
    Store
  ]
})
export class TransactionInProgressTableComponent implements AfterViewInit, OnInit {
  @ViewChild('detailsVente') modal;

  @Input() daysTableView: number;
  @Input() headerTableLinkExist: boolean;
  @Input() headerTableLink?: string;

  public myModal;
  public venteDetails;
  public venteDetailsExit = false;
  public selectedRow;
  public render: boolean;
  public data: Transaction[];
  public selectedRows;
  public selectedId: number[] = [];
  public multiSelection: boolean;

  public selectedVente: SelectedVente;
  public previousId: number[];
  public nextId: number[];
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
    lenghtMenu: [5, 10, 15],
    theme: 'blue theme',
    multiSelection: true,
    // selectionBtn: true,
    renderOption: true,
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
    private renderer: Renderer,
    private router: Router,
    private selectedVenteStore: Store<SelectedVente>,
  ) { }

  ngOnInit() {
    this.storeSubscibtion()
    // this.getTransactionsInProgress(this.daysTableView);

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
    this.addClickActionToDatatablesIcons();
  }

  storeSubscibtion() {
    this.selectedVenteStore.subscribe(data => (this.selectedVente = data));
    console.log(this.selectedVente);
  }

  addClickActionToDatatablesIcons() {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.classList.contains('datatbles-modif-btn')) {
        console.log('click to modif datatable icon');
        console.log('event.target.classList', event.target.classList);
        let idVente = event.target.id;
        this.goToModifAction([+idVente], true, false)
      } else if (event.target.classList.contains('datatbles-view-details-btn')) {
        console.log('click to view datatable icon');
        let idVente = event.target.id;
        this.venteDetailsExit = true;
        this.customdatatablesOptions.data.forEach(item => {
          if (+item.idvente === +idVente) {
            this.venteDetails = item;
          }
        })
        console.log(this.modal);
        this.modal.show();
      }
    });
  }

  checkPreviousAndNextId(id) {
    let currentIdIndex;
    this.previousId = [];
    this.nextId = [];
    this.customdatatablesOptions.data.forEach(item => {
      if(item.idvente === id) {
        currentIdIndex = this.customdatatablesOptions.data.indexOf(item);
      }
    })
    for (let i = 0; i < this.customdatatablesOptions.data.length; i++) {
      if (i < currentIdIndex) {
        this.previousId.push(this.customdatatablesOptions.data[i].idvente);
      } else if (i > currentIdIndex) {
        this.nextId.push(this.customdatatablesOptions.data[i].idvente);
      }
    }
    console.log(this.previousId);
    console.log(this.nextId);
  }

  goToModifAction(allId: number[], modif: boolean, multiSelection: boolean) {
    // let backModal = document.getElementsByClassName('show');
    // console.log(backModal);
    this.modal.hide();
    this.modal.animated = false;
    this.modal.show = false;
    this.checkPreviousAndNextId(allId[0])
    this.selectedVenteStore.dispatch({
      type: 'ADD_SELECTED_VENTE',
      payload: {
        allId: allId,
        previousId: this.previousId,
        nextId: this.nextId,
        modif: modif,
        multiSelection: multiSelection
      }
    });
    // let that = this;
    // setTimeout(() => that.router.navigate([`./modification`]), 3000);
    this.router.navigate([`./modification`]);
  }

  clearselectedVenteStore() {
    console.log('clear Store --------------------');
      this.previousId = [];
      this.nextId = [];
      this.selectedVenteStore.dispatch({
        type: 'CLEAR_SELECTED_VENTE',
        payload: {}
      });
  }

  closeDetailsVenteModal() {

    this.modal.hide()
    this.clearselectedVenteStore();
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
      console.log('dblClick action');
      this.venteDetailsExit = true;
      this.venteDetails = dataRow;
      this.modal.show();
    };
      // this.customdatatablesOptions.clickAction = (dataRow) => {
      //   this.selectedRow = dataRow;
      // }
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
    console.log('data columns :', vente[0]);
    this.customdatatablesOptions.columns = [
      {
        title: 'Clerc',
        data: function (data, type, row, meta) {
          return data.clerc.personne.nom;
        }
      },
      {
        title: 'Client',
        data: function (data, type, row, meta) {
          return data.client.nom;
        }
      },
      {
        title: 'Vendeur',
        data: function (data, type, row, meta) {
          return data.vendeur.nom;
        }
      },
      {
        title: 'Acquéreur',
        data: function (data, type, row, meta) {
          return data.acquereur.nom;
        }
      },
      {
        title: 'Portefeuille',
        data: function (data, type, row, meta) { // repoName ?
          return data.acquereur.nom;
        }
      },
      {
        title: 'Biens',
        data: function (data, type, row, meta) { // adresses
          return data.biens; //  (array)
        }
      },
      {
        title: 'Signature',
        data: function (data, type, row, meta) {
          return data.datesignature;
        }
      },
      {
        title: 'Confrère',
        data: function (data, type, row, meta) {
          return data.confrere.nom;
        }
      },
      {
        title: 'Type DR',
        data: function (data, type, row, meta) { // typeDR
          return data.datarooms; // (array)
        }
      },
      {
        title: 'Actions',
        orderable: false,
        data: function (data, type, row, meta) {
        data = `<div class="icons-actions">
                  <i class="icofont icofont-eye datatbles-view-details-btn" id=${data.idvente}></i>
                  <i class="icon-pencil icons font-xl d-block datatbles-modif-btn" id=${data.idvente}></i>
                </div>`;
          return data;
        }
      }
    ];
  }

  allSelectedRows(e) {
    this.selectedRows = e;
    console.log(this.selectedRows);
    console.log(this.selectedRows.length);
    for (let i = 0; i < this.selectedRows.length; i++) {
      console.log(this.selectedRows[i]);
      if (!this.selectedId.includes(this.selectedRows[i].idvente)) {
        this.selectedId.push(this.selectedRows[i].idvente);
      }
    }
    if (this.selectedRows.length === 1) {
      this.multiSelection = false;
    } else {
      this.multiSelection = true;
    }
    this.goToModifAction(this.selectedId, true, this.multiSelection);
    // this.router.navigate([`/material-sheets/my-material-sheets/modification`]);
  }

  // SWAL MODAL OPTION
  // displayAction() { 
  //   this.customdatatablesOptions.dbClickAction = (dataRow) => {
  //     // this.router.navigate([`/detail-file/support/${dataRow.id}/seg/${dataRow.noseg}`]);
  //     console.log('click action');
  //     Swal.fire({
  //       title : 'Détail de la vente',
  //       text: '',
  //       // html :
  //       // `<button type="button" role="button" tabindex="0" class="SwalBtn1 customSwalBtn" id="btnCoucou">Détails</button>` +
  //       // `<button type="button" role="button" tabindex="0" class="SwalBtn2 customSwalBtn">Modifier</button>`,
  //       showCancelButton: true,
  //       cancelButtonText: 'Fermer',
  //       showConfirmButton: true,
  //       confirmButtonText: 'Modifier',
  //       confirmButtonColor: '#FFB64D',
  //       showCloseButton: true,
  //       // type: 'warning',
  //     }).then(result => {
  //       if (result.value) { // confirm button
  //         // this.router.navigate([`/material-sheets/my-material-sheets/modification`]);
  //         console.log('ok');
  //       } else {
  //         console.log('not ok');
  //       }
  //     });
  //   };
  //   this.customdatatablesOptions.tooltipHeader = 'Double cliquer sur un fichier pour avoir une vue détaillée';
  // }
}
