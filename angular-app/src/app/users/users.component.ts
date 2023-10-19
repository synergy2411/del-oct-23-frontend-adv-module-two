import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IUser } from '../model/user.interface';
import { USER_DATA } from '../model/mock';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersComponent implements OnInit {

  users: Array<IUser>;


  ngOnInit(): void {
    this.users = USER_DATA;
  }

  onMoreInfo(company: string) {
    alert(`User is working with ${company}`)
  }

}
