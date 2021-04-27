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
  driverId!: number;
  distance!: number;
  bill!: number;
  from_location!: string
  to_location!: string



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  constructor(private httpClient: HttpClient) { }

  setFromLocation(from_location: string) {
    this.from_location = from_location
  }
  getFromLocation(): string {
    return this.from_location
  }
  setToLocation(to_location: string) {
    this.to_location = to_location
  }
  getToLocation(): string {
    return this.to_location
  }

  setBill(bill: number) {
    this.bill = bill
  }

  getBill(): number {
    return this.bill
  }

  setCutomerId(cutomerId: number) {
    this.customerId = cutomerId;
  }
  getCustomerId(): number {
    return this.customerId
  }

  setDriverId(driverId: number) {
    this.driverId = driverId
  }
  getDriverId(): number {
    return this.driverId
  }
  setDistance(distance: number) {
    this.distance = distance
  }
  getDistance(): number {
    return this.distance
  }




  customer_url = 'http://localhost:8085/customer/';
  trip_url = 'http://localhost:8085/tripbooking/';
  location_url = 'assets/Location.json'
  drivers_url = 'http://localhost:8085/driver'
  getCustomerTrips(): Observable<any> {
    return this.httpClient.get<any>(this.trip_url + this.customerId).pipe(
      catchError(this.handleError)
    );
  }

  getLocations() {
    return this.httpClient.get<any>(this.location_url)
  }

  getAllDrivers(): Observable<any> {
    return this.httpClient.get<any>(this.drivers_url)
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
