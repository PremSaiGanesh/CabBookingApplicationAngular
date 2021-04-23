import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';
import { ICustomer } from 'src/app/utils/Customer';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private _customerService: CustomerService,private router: Router) { }
  customer:ICustomer = {
    customerId: 0,
    email:'',
    mobileNumber: '',
    password: '',
    username: ''
  };
  ngOnInit(): void {
    this._customerService.getCustomerDetails().subscribe((data: ICustomer) => {
      this.customer = data;

    })

  }


  updatecustomer(){
    this._customerService.updateCustomer(this.customer).subscribe((data)=>{
      this.customer=data;
        this.router.navigate(['customer',this.customer.customerId,'profile'])
    })
}

}
