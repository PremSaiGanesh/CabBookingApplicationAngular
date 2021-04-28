import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators'
import { IAdmin } from '../utils/Admin';
import { ICustomer } from '../utils/Customer';
import { IDriver } from '../utils/Driver';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminId!: number;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }


  /*  Admin */
  setAdminId(adminId: number) {
    this.adminId = adminId;
  }
  getAdminId(): number {
    return this.adminId;
  }

  private admin_base_url = 'http://localhost:8085/admin/';

  getAdminDetails() {
    return this.httpClient.get<IAdmin>(this.admin_base_url + this.adminId).pipe(
      catchError(this.handleError)
    );
  }

  getAdminDetailsById(adminId: number) {
    return this.httpClient.get<IAdmin>(this.admin_base_url + adminId).pipe(
      catchError(this.handleError)
    );
  }


  updateAdmin(admin: IAdmin): Observable<IAdmin> {
    return this.httpClient.post<IAdmin>(this.admin_base_url, admin, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteAdminByAdminId(adminId: number): Observable<IAdmin[]> {
    return this.httpClient.delete<IAdmin[]>(this.admin_base_url + adminId).pipe(
      catchError(this.handleError)
    );
  }

  getAllAdmins(): Observable<IAdmin[]> {
    return this.httpClient.get<IAdmin[]>(this.admin_base_url).pipe(
      catchError(this.handleError)
    );
  }

  /* Customer */

  private customer_base_url = 'http://localhost:8085/customer/';

  getAllCustomers(): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(this.customer_base_url + 'all').pipe(
      catchError(this.handleError)
    );
  }

  getCustomerById(customerId: number) {
    return this.httpClient.get<ICustomer>(this.customer_base_url + customerId).pipe(
      catchError(this.handleError)
    );
  }

  updateCustomer(cutomer: ICustomer): Observable<ICustomer> {
    return this.httpClient.put<ICustomer>(this.customer_base_url, cutomer, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteCustomerById(customerId: number): Observable<ICustomer[]> {
    return this.httpClient.delete<ICustomer[]>(this.customer_base_url + customerId).pipe(
      catchError(this.handleError)
    );
  }

  /** <----Driver----> */

  private driver_base_Url = 'http://localhost:8085/driver/';

  getAllDrivers(): Observable<IDriver[]> {
    return this.httpClient.get<IDriver[]>(this.driver_base_Url).pipe(
      catchError(this.handleError)
    );
  }
  getDriverDetailsById(driverId:number){
    return this.httpClient.get<IDriver>(this.driver_base_Url+driverId).pipe(
      catchError(this.handleError)
    );
  }

  updateDriver(driver:IDriver){
    return this.httpClient.put<IDriver>(this.driver_base_Url,driver).pipe(
      catchError(this.handleError)
    );
  }

  deleteDriverById(driverId:number):Observable<IDriver[]>{
    return this.httpClient.delete<IDriver[]>(this.driver_base_Url+driverId).pipe(
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
