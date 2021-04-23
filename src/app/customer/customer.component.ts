import { CustomerService } from './customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  active = 'top';
  trips: any;
  constructor(private actRouter: ActivatedRoute, private _customerService: CustomerService) { }
  public isCollapsed = false;
  ngOnInit(): void {
    this._customerService.setCutomerId(this.actRouter.snapshot.params['customerId']);
    this._customerService.getCustomerTrips().subscribe((data) => {
      this.trips = data;
      console.log(this.trips);
    });
  }


}
