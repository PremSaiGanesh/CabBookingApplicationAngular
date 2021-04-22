import { SignupService } from './signup.service';
import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private _signupService:SignupService ) { }

  alertType!:string;
  signUpForm!:FormGroup;
  terms!:FormGroup;
  showAlert!:boolean;
  ngOnInit(): void {

      this.signUpForm= this.fb.group({

        username:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        mobileNumber:['',Validators.required]

      });
      this.terms = this.fb.group(
        {checkMe:[false,Validators.requiredTrue]}
      )
  }



  signUp(){
     this._signupService.confirmSignIn(this.signUpForm.value).subscribe(()=>{this.alertType='success'; this.showAlert=true});
  }

}
