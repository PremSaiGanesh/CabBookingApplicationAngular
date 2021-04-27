import { Router } from '@angular/router';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  constructor(private _customerService: CustomerService, private router:Router) { }
  locationId: number = 0;
  distance: number = 0;

  locationsArray: locations[] = []
  drivers: Driver[] = []

  ngOnInit(): void {
    this.getLocations()
  }
  getLocations() {
    this._customerService.getLocations().subscribe((data: locations[]) => this.locationsArray = data)
  }


  getDrivers() {
    this._customerService.getAllDrivers().subscribe(
      (data: Driver[]) => this.drivers = data
    )
  }
  bookTrip(driverId:number,bill:number){
    this._customerService.setDriverId(driverId)
    this._customerService.setDistance(this.distance)
    this._customerService.setBill(bill)
    this.router.navigate(['customer',this._customerService.getCustomerId(),'book']);

  }
}

class locations {
  "id": number;
  "from_Location": string;
  "possibleROutes": location[]
}
class location {
  "LId": number;
  "to_Location": string;
  "Distance": number
}
class Driver {

  cab = {

    cabId: 0,
    carType: '',
    perKmRate: 0
  }
  driverId: number = 0;
  email: string = '';
  mobileNumber: string = '';
  password: string = '';
  username: string = '';
  licenseNo: string = '';
  rating: number = 0;

}
