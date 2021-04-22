import { CustomerService } from './customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private actRouter: ActivatedRoute, private _customerService:CustomerService) { }

  ngOnInit(): void {
    this._customerService.setCutomerId(this.actRouter.snapshot.params['customerId']);

  }


}
