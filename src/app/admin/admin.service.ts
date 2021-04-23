import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators'
import { IAdmin } from '../utils/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminId!:number;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  setAdminId(adminId:number){
    this.adminId=adminId;
  }
  getAdminId():number{
    return this.adminId;
  }

  private admin_base_url = 'http://localhost:8085/admin/';

 getAdminDetails(){
    return this.httpClient.get<IAdmin>(this.admin_base_url + this.adminId).pipe(
      catchError(this.handleError)
    );
  }
  updateAdmin(admin: IAdmin): Observable<IAdmin> {
    return this.httpClient.post<IAdmin>(this.admin_base_url, admin, this.httpOptions).pipe(
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
