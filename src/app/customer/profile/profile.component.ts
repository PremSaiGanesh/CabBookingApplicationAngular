import { CustomerService } from '../customer.service';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/utils/Customer';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _customerService: CustomerService) { }
  customer: ICustomer = {
    customerId: 0,
    email: '',
    mobileNumber: '',
    password: '',
    username: ''
  };


  ngOnInit(): void {
    this._customerService.getCustomerDetails().subscribe((data: ICustomer) => {
      this.customer = data;

    })

  }




}
