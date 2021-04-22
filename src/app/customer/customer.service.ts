import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from './profile/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerId!:number;
  customer!:ICustomer;
  constructor(private httpClient:HttpClient) { }

  setCutomerId(cutomerId:number){
    this.customerId=cutomerId;
  }


  customer_url= 'http://localhost:8085/customer/';

  getCustomerDetails():Observable<ICustomer>{
   return this.httpClient.get<ICustomer>(this.customer_url+this.customerId);
  }

}
