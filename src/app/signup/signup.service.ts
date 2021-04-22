
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { IUser } from '../User';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  private signUp_url = 'http://localhost:8085/customer';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  confirmSignIn(user: IUser): Observable<IUser> {

    //? PlaceHolder ==> uname =sai, pass:123, returns false:
    return this.httpClient.post<IUser>(this.signUp_url, JSON.stringify(user), this.httpOptions).  pipe(
      catchError(this.handleError)
    );
  }

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.error instanceof ErrorEvent) {
      console.log("Client Side Error =" + eResponse.error.message);
      console.log("Status Code=" + eResponse.status);
    }
    else {
      console.log("Server Side Error =" + eResponse.error.message);
      console.log("Status Code=" + eResponse.status);
    }
    return throwError(eResponse.error.message);
  }
}
