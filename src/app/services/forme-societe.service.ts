
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { FormeSociete } from '../models/forme-societe-libelle';

// temporary imports :
import { rootUrl, formeSocieteLibelleUrl } from '../../../privates-url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class FormeSocieteService {
  constructor(private http: HttpClient) {}

  /* GET ONE FICHE MATERIEL BY ID */
  getFormeSociete(): Observable<FormeSociete[]> {
    return this.http
      .get(rootUrl + formeSocieteLibelleUrl)
      .map((res: any) => {
        console.log(res);
        return res as FormeSociete[];
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