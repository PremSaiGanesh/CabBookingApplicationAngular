import { CustomerService } from './customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  locationId: number = 0;
  distance:number=0;
  active = 'top';
  trips: any;
  drivers:Driver[] = []
  tempDrivers:Driver[]=[]
  constructor(private actRouter: ActivatedRoute, private _customerService: CustomerService) { }
  public isCollapsed = false;
  ngOnInit(): void {
    this._customerService.setCutomerId(this.actRouter.snapshot.params['customerId']);
    this._customerService.getCustomerTrips().subscribe((data) => {
      this.trips = data;
      console.log(this.trips);
    });
    this.getLocations()


  }
  locationsArray: locations[] = []

  getLocations() {
    this._customerService.getLocations().subscribe((data: locations[]) => this.locationsArray = data)
  }

  calculateBill(){
  this.getDrivers()


  }


getDrivers(){
 this._customerService.getAllDrivers().subscribe(
    (data:Driver[]) =>this.drivers = data
  )
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
class Driver{

  cab={

      cabId:0,
        carType:'',
        perKmRate: 0
    }
  driverId: number=0;
  email: string='';
  mobileNumber: string='';
  password: string='';
  username: string='';
  licenseNo:string='';
  rating:number=0;

}
