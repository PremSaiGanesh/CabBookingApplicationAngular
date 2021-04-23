import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { IAdmin } from 'src/app/utils/Admin';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private _adminService: AdminService) { }

  admin: IAdmin = {
    adminId: 0,
    email: '',
    mobileNumber: '',
    password: '',
    username: ''
  }


  ngOnInit(): void {
    this._adminService.getAdminDetails().subscribe((data: IAdmin) => {
      this.admin = data;

    })
  }

}
