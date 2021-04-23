import { SignupService } from './../signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-sign-up',
  templateUrl: './driver-sign-up.component.html',
  styleUrls: ['./driver-sign-up.component.css']
})
export class DriverSignUpComponent implements OnInit {

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
    this._signupService.driverSignUp(this.signUpForm.value).subscribe(() => { this.alertType = 'success'; this.showAlert = true });
  }

}
