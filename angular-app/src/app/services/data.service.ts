import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUserData() {
    return USER_DATA;
  }
}
