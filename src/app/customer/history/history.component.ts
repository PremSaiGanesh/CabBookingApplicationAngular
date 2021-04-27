import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  trips: any;

  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
    this._customerService.getCustomerTrips().subscribe((data) => {
      this.trips = data;
      console.log(this.trips);
    });
  }


}

