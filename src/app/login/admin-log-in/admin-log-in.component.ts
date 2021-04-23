import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../customer';

@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent implements OnInit {
  constructor(private fb: FormBuilder, private _loginService: LoginService, private router: Router) { }
  loginForm!: FormGroup;
  message!: string;
  obj!: Observable<ICustomer>;
  adminId!: number;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  logIn() {
    this._loginService.adminLogin(this.loginForm.value).subscribe(
      data => {
        this.adminId = data.adminId; console.log(this.adminId);
        if (this.adminId != 0 && this.adminId != undefined) {
        this._loginService.setAuthFlag(true);
          this.router.navigate(['admin',this.adminId])
        }
        else {
          this.message = `Invalid Username/Password`;

        }
      }
    );


  }

}
