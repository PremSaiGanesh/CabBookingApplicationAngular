import { Component, OnInit } from '@angular/core';
import { IDriver } from 'src/app/utils/Driver';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-all-drivers-search',
  templateUrl: './all-drivers-search.component.html',
  styleUrls: ['./all-drivers-search.component.css']
})
export class AllDriversSearchComponent implements OnInit {

  driversArray:IDriver[]=[]
  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
    this.getAllDrivers()
  }

  getAllDrivers(){
    this._adminService.getAllDrivers().subscribe(
      (data:IDriver[])=>this.driversArray=data
    )
  }
  deleteDriverById(driverId: number) {
    this._adminService.deleteDriverById(driverId).subscribe(
      (data: IDriver[]) => this.driversArray = data
    )


  }

}
