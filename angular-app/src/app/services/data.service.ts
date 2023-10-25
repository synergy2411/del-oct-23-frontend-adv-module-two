import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { USER_DATA } from '../model/mock';
import { Observable } from 'rxjs';
import { IUser } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUserData(): Observable<IUser[]> {

    return this.http.get<IUser[]>("https://sk-del-oct-23-default-rtdb.firebaseio.com/userdata.json");

  }
}
