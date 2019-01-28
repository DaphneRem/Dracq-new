import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NgbDatepickerI18n, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { CustomDatepickerI18n, I18n } from '../../services/custom-datepicker-i18n';
import { NgbDateCustomParserFormatter } from '../../services/custom-parser-formatter-datepiker';

import { AdresseService } from '../../services/adresse.service';
import { Adresse } from '../../models/adresse';

import { LibelleService } from '../../services/libelle.service';
import { Libelle } from '../../models/libelle';

import { BienService } from '../../services/bien.service';
import { Bien } from '../../models/bien';

import { CodePostalLocaliteService } from '../../services/code-postal-localite.service';
import { Codepostal } from '../../models/code-postal';

import { CollaborateurService } from '../../services/collaborateur.service';
import { Collaborateur } from '../../models/collaborateur';

import { PersonneService } from '../../services/personne.service';
import { Personne } from '../../models/personne';

import { SocieteService } from '../../services/societe.service';
import { Societe } from '../../models/societe';

import { Vente } from '../../models/vente';

@Component({
  selector: 'app-transaction-creation',
  templateUrl: './transaction-creation.component.html',
  styleUrls: ['./transaction-creation.component.css'],
  providers: [
    AdresseService,
    BienService,
    CodePostalLocaliteService,
    CollaborateurService,
    LibelleService,
    PersonneService,
    SocieteService,
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }
  ]
})
export class TransactionCreationComponent implements OnInit {
  public newVente: Vente = new Vente();
  public datesignatureNgFormat: NgbDateStruct;

  public civiliteLibelle: Libelle[];
  public dataRoomLibelle: Libelle[];
  public formeSocieteLibelle: Libelle[];
  public statutLibelle: Libelle[];
  public titreLibelle: Libelle[];

  public adresse: Adresse;
  public codePostal: Codepostal[];
  public localite: Codepostal[];
  public person: Personne;
  public collaborateur: Collaborateur;
  public societe: Societe;
  public bien: Bien;

  constructor(
    private adresseService: AdresseService,
    private bienService: BienService,
    private codePostalLocaliteService: CodePostalLocaliteService,
    private collaborateurService: CollaborateurService,
    private libelleService: LibelleService,
    private location: Location,
    private personneService: PersonneService,
    private societeService: SocieteService
  ) {}

  ngOnInit() {
    console.log('init TransactionComponent');
    console.log(this.newVente);
    this.getCiviliteLibelle();
    this.getDataRoomLibelle();
    this.getFormeSocieteLibelle();
    this.getStatutDossierLibelle();
    this.getTitreLibelle();
    this.getCodePostal(93210);
    this.getLocalite('paris');
    this.getPersonne(1);
    this.getCollaborateur(1);
    this.getSociete(1);
    this.getBien(1);
    this.getAdresse(1);
    this.updatePersonne({
      idPersonne: 1,
      titre: '',
      civilite: 'M.,',
      nom: 'GUILLARME',
      prenom: 'Christophe',
      initiales: 'CGU',
      telFixe: '0101010101',
      telMobile: '',
      email: 'c.guillarme@gmail.com'
    });
  }

  goBack() {
    this.location.back();
  }

/*********************************** GET LIBELLE *****************************/

  getCiviliteLibelle() {
    this.libelleService.getCiviliteLibelle().subscribe(data => {
      this.civiliteLibelle = data;
      console.log('civilité : ', this.civiliteLibelle);
    });
  }

  getDataRoomLibelle() {
    this.libelleService.getDataRoomLibelle().subscribe(data => {
      this.dataRoomLibelle = data;
      console.log('dataroom : ', this.dataRoomLibelle);
    });
  }

  getFormeSocieteLibelle() {
    this.libelleService.getFormeSocieteLibelle().subscribe(data => {
      this.formeSocieteLibelle = data;
      console.log('societe libelle : ', this.formeSocieteLibelle);
    });
  }

  getStatutDossierLibelle() {
    this.libelleService.getStatutDossierLibelle().subscribe(data => {
      this.statutLibelle = data;
      console.log('statuts : ', this.statutLibelle);
    });
  }

  getTitreLibelle() {
    this.libelleService.getTitreLibelle().subscribe(data => {
      this.titreLibelle = data;
      console.log('titre : ', this.titreLibelle);
    });
  }

/********************************* GET CODE POSTAL & LIBELLE ***************************/

  getCodePostal(code) {
    this.codePostalLocaliteService.getCodePostal(code).subscribe(data => {
      this.codePostal = data;
      console.log('code postal : ', this.codePostal);
    });
  }

  getLocalite(localite) {
    this.codePostalLocaliteService.getLocalite(localite).subscribe(data => {
      this.localite = data;
      console.log('localite : ', this.localite);
    });
  }

/*********************************** PERSONNE *****************************/

  getPersonne(id) {
    this.personneService.getPersonne(id).subscribe(data => {
      this.person = data;
      console.log('personne', this.person);
    });
  }

  updatePersonne(person) {
    console.log('personne avant update : ', person);
    this.personneService
      .updatePersonne(person)
      .subscribe(data => {
        console.log('update personne ', data);
      });
  }

/*********************************** GET COLLABORATEUR *****************************/

  getCollaborateur(id) {
    this.collaborateurService.getCollaborateur(id).subscribe(data => {
      this.collaborateur = data;
      console.log('collaborateur : ', this.collaborateur);
    });
  }

/*********************************** GET SOCIETE *****************************/

  getSociete(id) {
    this.societeService
      .getSociete(id)
      .subscribe(data => {
        this.societe = data;
        console.log('societe : ', this.societe);
      });
  }

/*********************************** GET LIBELLE *****************************/

  getBien(id) {
    this.bienService
      .getBien(id)
      .subscribe(data => {
        this.bien = data;
        console.log('bien : ', this.bien);
      });
  }

/*********************************** GET LIBELLE *****************************/

  getAdresse(id) {
    this.adresseService
      .getAdresse(id)
      .subscribe(data => {
        this.adresse = data;
        console.log('adresse : ', this.adresse);
      })
  }

}
