import { CustomerService } from './../customer/customer.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateBill'
})
export class CalculateBillPipe implements PipeTransform {
  constructor(private _customerService:CustomerService){}

  drivers:Driver[]=[]
  transform(drivers: Driver[], distance:number) {
    this._customerService.getAllDrivers().subscribe((data:Driver[])=>this.drivers=data)
   for (let index = 0; index < this.drivers.length; index++) {
     const element = this.drivers[index];
     element.cab.perKmRate=element.cab.perKmRate*distance

   }
   return this.drivers
  }


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
