import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { venteData } from 'src/app/data/fake-data-vente';

@Component({
  selector: 'app-vente-details-modal',
  templateUrl: './vente-details-modal.component.html',
  styleUrls: ['./vente-details-modal.component.css']
})
export class VenteDetailsModalComponent implements OnInit, OnChanges {
  @Input() venteDetails;

  public currentVente;

  constructor() { }

  ngOnInit() {
    console.log(this.venteDetails);
    this.currentVente = this.venteDetails;
  }

  ngOnChanges(changes: SimpleChanges) {
    const changeVenteDetails: SimpleChange = changes.venteDetails;
    this.currentVente = changeVenteDetails;
  }

}
