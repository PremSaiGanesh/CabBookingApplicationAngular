import { Router } from '@angular/router';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { IAdmin } from 'src/app/utils/Admin';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  constructor(private _adminService:AdminService, private router: Router) { }
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

  updateAdmin(){
    this._adminService.updateAdmin(this.admin).subscribe((data)=>{
      this.admin=data;
        this.router.navigate(['admin',this.admin.adminId,'profile'])
    })
  }

}
