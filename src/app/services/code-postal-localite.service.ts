
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Codepostal } from '../models/code-postal';

// temporary imports :
import {
  rootUrl,
  codePostalUrl,
  codePostalSearchUrl,
  localiteSearchUrl
} from 'privates-url';

// codePostalUrl = '/info/codepostal';
// codePostalSearchUrl = '?codepostal='; // ex : 93210
// localiteSearchUrl = '?localite='; // ex : paris

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class CodePostalLocaliteService {
  constructor(private http: HttpClient) {}

    getAllCodePostalAndLocalite(): Observable<Codepostal[]> {
      return this.http
        .get(rootUrl + codePostalUrl)
        .map((res: any) => {
            console.log(res);
            return res as Codepostal[];
        });
    }

    getCodePostal(code: string): Observable<Codepostal[]> {
        return this.http
            .get(rootUrl + codePostalUrl + codePostalSearchUrl + code)
            .map((res: any) => {
                console.log(res);
                return res as Codepostal[];
            });
    }

    getLocalite(localite: string): Observable<Codepostal[]> {
        return this.http
            .get(rootUrl + codePostalUrl + localiteSearchUrl + localite)
            .map((res: any) => {
                console.log(res);
                return res as Codepostal[];
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