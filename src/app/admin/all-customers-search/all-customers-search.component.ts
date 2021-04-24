import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/utils/Customer';

@Component({
  selector: 'app-all-customers-search',
  templateUrl: './all-customers-search.component.html',
  styleUrls: ['./all-customers-search.component.css']
})
export class AllCustomersSearchComponent implements OnInit {

  customersArray: ICustomer[] = [];

  constructor(private _adminService: AdminService) { }

  ngOnInit(): void {
    this.allCustomersList()
  }
  allCustomersList() {
    this._adminService.getAllCustomers().subscribe(
      (data: ICustomer[]) => this.customersArray = data
    )
  }
  deleteCustomerById(customerId: number) {
    this._adminService.deleteCustomerById(customerId).subscribe(
      (data: ICustomer[]) => this.customersArray = data
    )

  }
}
