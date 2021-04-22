import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ICustomer } from './customer';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authFlag: boolean = false;
  setAuthFlag(): boolean {
    return this.authFlag;
  }

  constructor(private httpClient:HttpClient) { }

  private login_url = 'http://localhost:8085/customer/login';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  validateLogin(data: any): Observable<ICustomer> {
    return this.httpClient.post<ICustomer>(this.login_url,JSON.stringify(data),this.httpOptions).pipe(
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
