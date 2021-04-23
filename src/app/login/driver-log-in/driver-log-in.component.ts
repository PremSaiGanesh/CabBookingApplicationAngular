import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../customer';

@Component({
  selector: 'app-driver-log-in',
  templateUrl: './driver-log-in.component.html',
  styleUrls: ['./driver-log-in.component.css']
})
export class DriverLogInComponent implements OnInit {

  constructor(private fb: FormBuilder, private _loginService: LoginService, private router: Router) { }
  loginForm!: FormGroup;
  message!: string;
  obj!: Observable<ICustomer>;
  driverId!: number;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  logIn() {
    this._loginService.driverLogin(this.loginForm.value).subscribe(
      data => {
        this.driverId = data.driverId; console.log(this.driverId);
        if (this.driverId != 0 && this.driverId != undefined) {
        this._loginService.setAuthFlag(true);
          this.router.navigate(['customer',this.driverId])
         console.log(this.driverId);
        }
        else {
          this.message = `Invalid Username/Password`;

        }
      }
    );


  }


}
