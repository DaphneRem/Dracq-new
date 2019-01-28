
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
  localiteUrl
} from 'privates-url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class CodePostalLocaliteService {
  constructor(private http: HttpClient) {}

    getCodePostal(code): Observable<Codepostal[]> {
        return this.http
            .get(rootUrl + codePostalUrl + code)
            .map((res: any) => {
                console.log(res);
                return res as Codepostal[];
            });
    }

    getLocalite(localite): Observable<Codepostal[]> {
        return this.http
            .get(rootUrl + localiteUrl + localite)
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