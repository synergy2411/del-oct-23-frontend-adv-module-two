import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  onLogin(username, password) {
    if (username === "john@test" && password === "john!123") {

      this.isLoggedIn = true;
      this.router.navigate(["/users"])
    } else {
      this.router.navigate(["/login"])
    }
  }

  isUserAuthenticated() {
    return this.isLoggedIn;
  }
}
