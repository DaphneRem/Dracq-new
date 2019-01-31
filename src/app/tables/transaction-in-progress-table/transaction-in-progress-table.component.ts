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
  ElementRef
} from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { SelectedVente } from '../../+state/+selected-vente/selected-vente.interface';

import { CustomDatatablesOptions } from '../../custom-datatables/models/custom-datatables-options';

import { TransactionsService } from '../../services/transactions.service';
import { Transaction } from '../../models/transaction-global';

import { venteData } from '../../data/fake-data-vente';
// import Swal from 'sweetalert2';


@Component({
  selector: 'app-transaction-in-progress-table',
  templateUrl: './transaction-in-progress-table.component.html',
  styleUrls: ['./transaction-in-progress-table.component.css'],
  providers: [
    TransactionsService,
    Store
  ]
})
export class TransactionInProgressTableComponent implements OnInit {
  @ViewChild('detailsVente') modal;

  @Input() daysTableView: number;
  @Input() headerTableLinkExist: boolean;
  @Input() headerTableLink?: string;

  public myModal;
  public venteDetails;
  public venteDetailsExit = false;

  public render: boolean;
  public data: Transaction[];
  public selectedRows;
  public selectedId: number[] = [];
  public multiSelection: boolean;

  public selectedVente: SelectedVente;

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
    selectionBtn: true,
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

  storeSubscibtion() {
    this.selectedVenteStore.subscribe(data => (this.selectedVente = data));
    console.log(this.selectedVente);
  }

  goToModif(allId: number[], modif: boolean, multiSelection: boolean) {
    this.selectedVenteStore.dispatch({
      type: 'ADD_SELECTED_VENTE',
      payload: {
        allId: allId,
        modif: modif,
        multiSelection: multiSelection
      }
    });
    // this.router.navigate([`/material-sheets/my-material-sheets/modification`]);
  }

  clearselectedVenteStore() {
      this.selectedVenteStore.dispatch({
        type: 'CLEAR_SELECTED_VENTE',
        payload: {}
      });
  }

  cancelDetailsVenteModal() {
    this.modal.hide()
    this.clearselectedVenteStore();
  }

  AllSelectedRows(e) {
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
    this.goToModif(this.selectedId, true, this.multiSelection);
    // this.router.navigate([`/material-sheets/my-material-sheets/modification`]);
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
      console.log('dblClick action');
      console.log(this.modal);
      this.venteDetailsExit = true;
      this.venteDetails = dataRow;
      this.modal.show();

    };
      // this.customdatatablesOptions.clickAction = (dataRow) => {
      //   console.log('one click');
      //   this.clearselectedVenteStore();    
      // }
      this.customdatatablesOptions.tooltipHeader = 'Double cliquer sur un fichier pour avoir une vue détaillée';
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
    ];
  }
}
