import { Component, OnInit, ViewChild } from '@angular/core';
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
import { VenteService } from '../../services/vente.service';

import { Store } from '@ngrx/store';
import { SelectedVente } from '../../+state/+selected-vente/selected-vente.interface';

import { Groupe } from '../../models/groupe';
import { GroupeService } from '../../services/groupe.service';

import { Utilisateur } from '../../models/utilisateur';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-transaction-modification',
  templateUrl: './transaction-modification.component.html',
  styleUrls: ['./transaction-modification.component.css'],
  providers: [
    AdresseService,
    BienService,
    CodePostalLocaliteService,
    CollaborateurService,
    GroupeService,
    LibelleService,
    PersonneService,
    SocieteService,
    UtilisateurService,
    I18n,
    Store,
    VenteService,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }
  ]
})
export class TransactionModificationComponent implements OnInit {
  @ViewChild('addSocieteModal') addSocieteModal;


  public newBien: Bien = new Bien();
  public datesignatureNgFormat: NgbDateStruct;

  public selectedVente: SelectedVente;
  public idCurrentVente: number;

  public civiliteLibelle: Libelle[];
  public dataRoomLibelle: Libelle[];
  public formeSocieteLibelle: Libelle[];
  public statutLibelle: Libelle[];
  public titreLibelle: Libelle[];

  public vente: Vente;
  public adresse: Adresse;
  public codePostal: Codepostal[];
  public localite: Codepostal[];
  public allCodePostal: Codepostal[];
  public person: Personne;
  public utilisateur: Utilisateur;
  public collaborateur: Collaborateur;
  public societe: Societe;
  public bien: Bien;
  public groupe: Groupe;
  public allGroupes: Groupe[];

  public previousVenteExist: boolean;
  public nextVenteExist: boolean;
  public previousVenteId: number;
  public nextVenteId: number;

  constructor(
    private adresseService: AdresseService,
    private bienService: BienService,
    private codePostalLocaliteService: CodePostalLocaliteService,
    private collaborateurService: CollaborateurService,
    private groupeService: GroupeService,
    private libelleService: LibelleService,
    private location: Location,
    private personneService: PersonneService,
    private societeService: SocieteService,
    private selectedVenteStore: Store<any>,
    private utilisateurService: UtilisateurService,
    private venteService: VenteService
  ) {}

  ngOnInit() {
    console.log('init TransactionComponent');
    this.initVente();
    // this.testRequests();
  }

  testRequests() {
    // this.getAllCodePostal();
    this.getVente(1);
    this.getCiviliteLibelle();
    this.getDataRoomLibelle();
    this.getFormeSocieteLibelle();
    this.getStatutDossierLibelle();
    this.getTitreLibelle();
    this.getCodePostal(93210);
    this.getLocalite('paris');
    this.getAllGroupes();
    this.getGroupe(1);
    this.getPersonne(1);
    this.getUtilisateur(1);
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
      telFixe: '00000',
      telMobile: '',
      email: 'c.guillarme@gmail.com'
    });
  }

  goBack() {
    this.location.back();
  }

  initVente() {
    this.storeSubscibtion();
  }

  storeSubscibtion() {
    this.selectedVenteStore.subscribe(data => {
      this.selectedVente = data.selectedVente;
      console.log(this.selectedVente);
      this.idCurrentVente = this.selectedVente.allId[0];
      console.log(this.selectedVente.previousId.length);
      console.log(this.selectedVente.nextId.length);
      if (this.selectedVente.previousId.length > 0) {
        let lastIndex = this.selectedVente.previousId.length - 1;
        this.previousVenteExist = true;
        this.previousVenteId = this.selectedVente.previousId[lastIndex];
      } else {
        this.previousVenteExist = false;
        this.previousVenteId = null;
      }
      if (this.selectedVente.nextId.length > 0) {
        this.nextVenteExist = true;
        this.nextVenteId = this.selectedVente.nextId[0];
      } else {
        this.nextVenteExist = false;
        this.nextVenteId = null;
      }
    });
  }

  getVente(id) {
    this.venteService.getvente(id)
      .subscribe(data => {
        this.vente = data;
      });
  }

  changeVente(action) {
    if (action === 'previous') {
      let previousIdFirstItem = this.selectedVente.previousId.shift();
      console.log('previous ID : ', this.previousVenteId);
      console.log('allID : ', [this.previousVenteId]);
      console.log('nextId : ', [this.idCurrentVente, ...this.selectedVente.nextId]);
      console.log('previousId : ', this.selectedVente.previousId);
      this.selectedVenteStore.dispatch({
        type: 'ADD_SELECTED_VENTE',
        payload: {
          allId: [this.previousVenteId],
          previousId: [this.idCurrentVente, ...this.selectedVente.nextId],
          nextId: this.selectedVente.previousId,
          modif: true,
          multiSelection: false
        }
      });
      this.selectedVenteStore.subscribe(data => {
        this.selectedVente = data.selectedVente;
        console.log(this.selectedVente);
      });
    } else if (action === 'next') {
      let nextIdFirstItem = this.selectedVente.nextId.shift();
      console.log('next ID : ', this.nextVenteId);
      console.log('allID : ', [this.nextVenteId]);
      console.log('previousId : ', [this.idCurrentVente, ...this.selectedVente.previousId]);
      console.log('nextId : ', this.selectedVente.nextId);
      this.selectedVenteStore.dispatch({
        type: 'ADD_SELECTED_VENTE',
        payload: {
          allId: [this.nextVenteId],
          previousId: [this.idCurrentVente, ...this.selectedVente.previousId],
          nextId: this.selectedVente.nextId,
          modif: true,
          multiSelection: false
        }
      });
      this.selectedVenteStore.subscribe(data => {
        this.selectedVente = data.selectedVente;
        console.log(this.selectedVente);
      });
    }
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

  getAllCodePostal() {
    this.codePostalLocaliteService.getAllCodePostalAndLocalite()
      .subscribe(data => {
        this.allCodePostal = data;
        console.log(this.allCodePostal);
      });
  }
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

/************************************ GROUPE *******************************/

  getAllGroupes() {
    this.groupeService.getAllGroupes().subscribe(data => {
      this.allGroupes = data;
      console.log('allGroupes : ', this.allGroupes);
    });
  }

  getGroupe(id) {
    this.groupeService.getGroupe(id).subscribe(data => {
      this.groupe = data;
      console.log('allGroupes : ', this.groupe);
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

/************************************** UTILISATEUR *********************************/

  getUtilisateur(id) {
    this.utilisateurService.getUtilisateur(id)
      .subscribe(data => {
        this.utilisateur = data;
        console.log('utilisateur : ', this.utilisateur);
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
