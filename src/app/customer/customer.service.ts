import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators'
import { ICustomer } from '../utils/Customer';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerId!: number;
  customer!: ICustomer;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  constructor(private httpClient: HttpClient) { }

  setCutomerId(cutomerId: number) {
    this.customerId = cutomerId;
  }


  customer_url = 'http://localhost:8085/customer/';
  trip_url='http://localhost:8085/tripbooking/';

  getCustomerTrips(): Observable<any> {
    return this.httpClient.get<any>(this.trip_url + this.customerId).pipe(
      catchError(this.handleError)
    );
  }


  getCustomerDetails(): Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(this.customer_url + this.customerId).pipe(
      catchError(this.handleError)
    );
  }

  updateCustomer(cutomer: ICustomer): Observable<ICustomer> {
    return this.httpClient.post<ICustomer>(this.customer_url, cutomer, this.httpOptions).pipe(
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
