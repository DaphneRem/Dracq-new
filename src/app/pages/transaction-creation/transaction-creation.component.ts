import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NgbDatepickerI18n, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { CustomDatepickerI18n, I18n } from '../../services/custom-datepicker-i18n';
import { NgbDateCustomParserFormatter } from '../../services/custom-parser-formatter-datepiker';

import { LibelleService } from '../../services/libelle.service';
import { Libelle } from '../../models/libelle';

import { Vente } from '../../models/vente';

@Component({
  selector: 'app-transaction-creation',
  templateUrl: './transaction-creation.component.html',
  styleUrls: ['./transaction-creation.component.css'],
  providers: [
    LibelleService,
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }
  ]
})
export class TransactionCreationComponent implements OnInit {
  public newVente: Vente =  new Vente();
  public datesignatureNgFormat: NgbDateStruct;

  public civiliteLibelle: Libelle[];
  public dataRoomLibelle: Libelle[];
  public formeSocieteLibelle: Libelle[];
  public statutLibelle: Libelle[];
  public titreLibelle: Libelle[];

  constructor( 
    private libelleService: LibelleService,
    private location: Location
  ) {}

  ngOnInit() {
    console.log('init TransactionComponent')
    console.log(this.newVente);
    this.getCiviliteLibelle();
    this.getDataRoomLibelle();
    this.getFormeSocieteLibelle();
    this.getStatutDossierLibelle();
    this.getTitreLibelle();
  }

  goBack() {
    this.location.back();
  }

  getCiviliteLibelle() {
    this.libelleService
      .getCiviliteLibelle()
      .subscribe(data => {
        this.civiliteLibelle = data;
        console.log(this.civiliteLibelle);
      })
  }

  getDataRoomLibelle() {
    this.libelleService
      .getDataRoomLibelle()
      .subscribe(data => {
        this.dataRoomLibelle = data;
        console.log(this.dataRoomLibelle);
      })
  }

  getFormeSocieteLibelle() {
    this.libelleService
      .getFormeSocieteLibelle()
      .subscribe(data => {
        this.formeSocieteLibelle = data;
        console.log(this.formeSocieteLibelle);
      })
  }

  getStatutDossierLibelle() {
    this.libelleService
    .getStatutDossierLibelle()
    .subscribe(data => {
      this.statutLibelle = data;
      console.log(this.statutLibelle);
    })
  }

  getTitreLibelle() {
    this.libelleService
      .getTitreLibelle()
      .subscribe(data => {
        this.titreLibelle = data;
        console.log(this.titreLibelle);
      })
  }

}
