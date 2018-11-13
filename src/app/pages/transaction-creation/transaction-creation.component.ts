import { Component, OnInit } from '@angular/core';
import { StatutDossierService } from '../../services/statut-dossier.service';

@Component({
  selector: 'app-transaction-creation',
  templateUrl: './transaction-creation.component.html',
  styleUrls: ['./transaction-creation.component.css'],
  providers: [
    StatutDossierService
  ]
})
export class TransactionCreationComponent implements OnInit {
  public status;

  constructor(
    private statutDossierService: StatutDossierService
  ) { }

  ngOnInit() {
    this.getStatutDossier();
  }

  getStatutDossier() {
    this.statutDossierService.getStatutDossier().subscribe(data => {
      this.status = data;
      console.log(this.status);
    })
  }

}
