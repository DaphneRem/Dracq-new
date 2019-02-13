
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Groupe } from '../models/groupe';
// export const groupeUrl = '/groupe/'; // +idGroupe

// temporary imports :
import {
  rootUrl,
  groupeUrl
} from 'privates-url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class GroupeService {
  constructor(private http: HttpClient) {}

    getAllGroupes(): Observable<Groupe[]> {
        return this.http
          .get(rootUrl + groupeUrl)
          .map((res: any) => {
            console.log(res);
            return res as Groupe[];
          });
    }

  getGroupe(id): Observable<Groupe> {
        return this.http
          .get(rootUrl + groupeUrl + id)
          .map((res: any) => {
            console.log(res);
            return res as Groupe;
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