import { Router } from '@angular/router';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { IAdmin } from 'src/app/utils/Admin';

@Component({
  selector: 'app-all-admins-search',
  templateUrl: './all-admins-search.component.html',
  styleUrls: ['./all-admins-search.component.css']
})
export class AllAdminsSearchComponent implements OnInit {

  constructor(private _adminService: AdminService,private router:Router) { }
  adminsArray: IAdmin[] = [];
  ngOnInit(): void {
    this.allAdminsList()
  }

  allAdminsList() {
    this._adminService.getAllAdmins().subscribe(
      (data: IAdmin[]) => this.adminsArray = data
    )
  }

  deleteAdminById(adminId: number) {
    this._adminService.deleteAdminByAdminId(adminId).
        subscribe((data: IAdmin[]) => this.adminsArray = data);
  }

  updateRedirect(adminId:number){
    this.router.navigate(['admin',this._adminService.adminId,'updateAdmins',adminId])
  }

}
