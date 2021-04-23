import { SignupService } from './../signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.component.html',
  styleUrls: ['./customer-sign-up.component.css']
})
export class CustomerSignUpComponent implements OnInit {

  constructor(private fb: FormBuilder, private _signupService: SignupService) { }


  alertType!: string;
  signUpForm!: FormGroup;
  terms!: FormGroup;
  showAlert!: boolean;

  ngOnInit(): void {
    this.signUpForm = this.fb.group({

      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobileNumber: ['', Validators.required]

    });
    this.terms = this.fb.group(
      { checkMe: [false, Validators.requiredTrue] }
    )
  }
  signUp() {
    this._signupService.customerSignUp(this.signUpForm.value).subscribe(() => { this.alertType = 'success'; this.showAlert = true });
  }

}
