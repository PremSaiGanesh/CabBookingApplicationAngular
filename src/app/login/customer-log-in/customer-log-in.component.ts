import { Observable } from 'rxjs';
import { LoginService } from './../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../customer';

@Component({
  selector: 'app-customer-log-in',
  templateUrl: './customer-log-in.component.html',
  styleUrls: ['./customer-log-in.component.css']
})
export class CustomerLogInComponent implements OnInit {

  constructor(private fb: FormBuilder, private _loginService: LoginService, private router: Router) { }
  loginForm!: FormGroup;
  message!: string;
  obj!: Observable<ICustomer>;
  customerId!: number;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  logIn() {
    this._loginService.customerLogin(this.loginForm.value).subscribe(
      data => {
        this.customerId = data.customerId; console.log(this.customerId);
        if (this.customerId != 0 && this.customerId != undefined) {
        this._loginService.setAuthFlag(true);
          this.router.navigate(['customer',this.customerId])
        }
        else {
          this.message = `Invalid Username/Password`;

        }
      }
    );

    /* if(this._loginService.validateLogin(this.loginForm.value)){
      this.router.navigate(['customer'])
    }
    else{
     this.message=`Invalid Username/Password`;
     this.router.navigate(['/']);
    }*/
  }

}
