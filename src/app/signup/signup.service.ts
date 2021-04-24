
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { IUser } from '../User';
import { IDriver } from '../utils/Driver';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  private Customer_signUp_url = 'http://localhost:8085/customer';

  private Driver_signUp_url = 'http://localhost:8085/driver';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  customerSignUp(user: IUser): Observable<IUser> {

    //? PlaceHolder ==> uname =sai, pass:123, returns false:
    return this.httpClient.post<IUser>(this.Customer_signUp_url, JSON.stringify(user), this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  driverSignUp(user: IUser): Observable<IDriver> {

    //? PlaceHolder ==> uname =sai, pass:123, returns false:
    return this.httpClient.post<IDriver>(this.Driver_signUp_url, JSON.stringify(user), this.httpOptions).pipe(
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
