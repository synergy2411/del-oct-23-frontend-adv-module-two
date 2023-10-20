import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6), AuthComponent.hasExclamation]),
      cnfPassword: new FormControl("", [AuthComponent.cnfPasswordValidation])
    })
  }

  get username() {
    return this.authForm.get("username")
  }

  get password() {
    return this.authForm.get("password")
  }

  get cnfPassword() {
    return this.authForm.get("cnfPassword")
  }

  onLogin() {
    console.log(this.authForm)
  }


  static hasExclamation(control: AbstractControl): ValidationErrors | null {
    const hasExclMark = control.value.indexOf("!") >= 0;
    return hasExclMark ? null : { hasexclamation: true }
  }

  static cnfPasswordValidation(control: AbstractControl) {
    if (control.parent && control.parent.controls) {
      const isMatched = control.parent.controls["password"].value === control.value;
      return isMatched ? null : { cnfpassword: true }
    }
    return null;
  }

}


