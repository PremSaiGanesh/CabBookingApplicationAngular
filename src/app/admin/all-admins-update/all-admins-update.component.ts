import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { IAdmin } from 'src/app/utils/Admin';

@Component({
  selector: 'app-all-admins-update',
  templateUrl: './all-admins-update.component.html',
  styleUrls: ['./all-admins-update.component.css']
})
export class AllAdminsUpdateComponent implements OnInit {
  admin: IAdmin = {
    adminId: 0,
    email: '',
    mobileNumber: '',
    password: '',
    username: ''
  }
  adminId:number=0;
  constructor(private _adminService:AdminService, private router:Router,private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.adminId=this.actRouter.snapshot.params['adminId'];
    this._adminService.getAdminDetailsById(this.adminId).subscribe((data: IAdmin) => {
      this.admin = data;

    })
  }
  updateAdmin(){
    this._adminService.updateAdmin(this.admin).subscribe((data)=>{
      this.admin=data;
     this.router.navigate(['admin',this._adminService.getAdminId(),'manageAdmins',])
    })
  }
}
