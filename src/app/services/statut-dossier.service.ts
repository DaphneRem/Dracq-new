
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { StatutDossier } from '../models/statut-dossier-libelle';

// temporary imports :
import { externalHttpRootUrl, statutDossierLibelleUrl } from '../../../privates-url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class StatutDossierService {
  constructor(private http: HttpClient) {}

  /* GET ONE FICHE MATERIEL BY ID */
  getStatutDossier(): Observable<StatutDossier[]> {
    return this.http
      .get(externalHttpRootUrl + statutDossierLibelleUrl)
      .map((res: any) => {
        console.log(res);
        return res as StatutDossier[];
      });
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return new ErrorObservable(
        // 'Something bad happened; please try again later.'
    );
  }
}