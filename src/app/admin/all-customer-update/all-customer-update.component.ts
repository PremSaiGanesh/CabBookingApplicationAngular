import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/utils/Customer';

@Component({
  selector: 'app-all-customer-update',
  templateUrl: './all-customer-update.component.html',
  styleUrls: ['./all-customer-update.component.css']
})
export class AllCustomerUpdateComponent implements OnInit {

  constructor(private _adminService:AdminService, private router:Router,private actRouter: ActivatedRoute) { }
  customer:ICustomer = {
    customerId: 0,
    email:'',
    mobileNumber: '',
    password: '',
    username: ''
  };
  customerId:number=0;
  ngOnInit(): void {
    this.customerId = this.actRouter.snapshot.params['customerId']
    this._adminService.getCustomerById(this.customerId).subscribe((data: ICustomer) => {
      this.customer = data;

    })
  }
  updateCustomer(){
    this._adminService.updateCustomer(this.customer).subscribe((data)=>{
      this.customer=data;
        this.router.navigate(['admin',this._adminService.getAdminId(),'manageCustomers'])
    })
  }



}
