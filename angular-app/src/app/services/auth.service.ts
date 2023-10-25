import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor() { }

  onLogin(username, password) {
    if (username === "john@test" && password === "john!123") {

      this.isLoggedIn = true;
    }
  }

  isUserAuthenticated() {
    return this.isLoggedIn;
  }
}
