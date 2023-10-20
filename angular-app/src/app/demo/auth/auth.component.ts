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
      password: new FormControl("", [Validators.required, Validators.minLength(6), AuthComponent.hasExclamation])
    })
  }

  get username() {
    return this.authForm.get("username")
  }

  get password() {
    return this.authForm.get("password")
  }

  onLogin() {
    console.log(this.authForm)
  }


  static hasExclamation(control: AbstractControl): ValidationErrors | null {
    const hasExclMark = control.value.indexOf("!") >= 0;
    return hasExclMark ? null : { hasexclamation: true }
  }

}


