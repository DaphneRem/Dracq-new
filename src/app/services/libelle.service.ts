
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Libelle } from '../models/libelle';

// temporary imports :
import {
  rootUrl,
  civiliteLibelleUrl,
  dataroomLibelleUrl,
  formeSocieteLibelleUrl,
  statutDossierLibelleUrl,
  titreLibelleUrl
} from 'privates-url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class LibelleService {
  constructor(private http: HttpClient) {}

  getCiviliteLibelle(): Observable<Libelle[]> {
    return this.http
      .get(rootUrl + civiliteLibelleUrl)
      .map((res: any) => {
        console.log(res);
        return res as Libelle[];
      });
  }

  getDataRoomLibelle(): Observable<Libelle[]> {
    return this.http
      .get(rootUrl + dataroomLibelleUrl)
      .map((res: any) => {
        console.log(res);
        return res as Libelle[];
      });
  }

  getFormeSocieteLibelle(): Observable<Libelle[]> {
    return this.http
      .get(rootUrl + formeSocieteLibelleUrl)
      .map((res: any) => {
        console.log(res);
        return res as Libelle[];
      });
  }

  getStatutDossierLibelle(): Observable<Libelle[]> {
    return this.http
      .get(rootUrl + statutDossierLibelleUrl)
      .map((res: any) => {
        console.log(res);
        return res as Libelle[];
      });
  }

  getTitreLibelle(): Observable<Libelle[]> {
    return this.http
      .get(rootUrl + titreLibelleUrl)
      .map((res: any) => {
        console.log(res);
        return res as Libelle[];
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