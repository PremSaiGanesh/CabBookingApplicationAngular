import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { IDriver } from 'src/app/utils/Driver';

@Component({
  selector: 'app-all-drivers-update',
  templateUrl: './all-drivers-update.component.html',
  styleUrls: ['./all-drivers-update.component.css']
})
export class AllDriversUpdateComponent implements OnInit {
  driverId: number = 0;
  constructor(private _adminService: AdminService, private router: Router, private actRouter: ActivatedRoute) { }
  driver: IDriver = {
    driverId: 0,
    email: '',
    mobileNumber: '',
    password: '',
    username: ''
  }

  ngOnInit(): void {
    this.driverId = this.actRouter.snapshot.params['driverId'];
    this._adminService.getDriverDetailsById(this.driverId).subscribe((data: IDriver) => {
      this.driver = data;

    })
  }
  updateDriver() {
    this._adminService.updateDriver(this.driver).subscribe(
      (data: IDriver) => {
        this.driver;
        this.router.navigate(['admin', this._adminService.getAdminId(), 'manageDrivers'])
      }
    )
  }

}
