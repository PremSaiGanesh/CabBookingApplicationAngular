import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ICustomer } from './customer';
import { catchError } from 'rxjs/operators'
import { IAdmin } from './Admin';
import { IDriver } from './Driver';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authFlag: boolean = false;
  setAuthFlag(flag:boolean) {
   this.authFlag=flag;
  }
  getAuthFlag(): boolean {
    return this.authFlag;
  }
  constructor(private httpClient:HttpClient) { }

  private Customer_Login_url = 'http://localhost:8085/customer/login';
  private Admin_Login_url = 'http://localhost:8085/admin/login';
  private Driver_Login_url = 'http://localhost:8085/driver/login';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  customerLogin(data: any): Observable<ICustomer> {
    return this.httpClient.post<ICustomer>(this.Customer_Login_url,JSON.stringify(data),this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }



  driverLogin(data: any): Observable<IDriver> {
    return this.httpClient.post<IDriver>(this.Driver_Login_url,JSON.stringify(data),this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  adminLogin(data: any): Observable<IAdmin> {
    return this.httpClient.post<IAdmin>(this.Admin_Login_url,JSON.stringify(data),this.httpOptions).pipe(
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
