import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IUser } from '../model/user.interface';
import { DataService } from '../services/data.service';
// import { USER_DATA } from '../model/mock';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersComponent implements OnInit {

  users: Array<IUser>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.users = USER_DATA;
    this.dataService.getUserData().subscribe(allUsers => this.users = allUsers)
  }

  onMoreInfo(company: string) {
    alert(`User is working with ${company}`)
  }

}
