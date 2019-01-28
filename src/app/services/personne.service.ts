
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { catchError, retry } from 'rxjs/operators';

import { Personne } from '../models/personne';

// temporary imports :
import { rootUrl, personneUrl, setPersonneUrl } from 'privates-url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class PersonneService {
  constructor(private http: HttpClient) {}

    getPersonne(id): Observable<Personne> {
        return this.http
          .get(rootUrl + personneUrl + id)
          .map((res: any) => {
            console.log(res);
            return res as Personne;
          });
    }

    updatePersonne(person: Personne) {
        return this.http
              .post<Personne>(
                rootUrl + setPersonneUrl,
                person
            )
            .pipe(catchError(this.handleError));
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