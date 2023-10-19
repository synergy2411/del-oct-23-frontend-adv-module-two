import { Component, ViewEncapsulation } from '@angular/core';
import { IUser } from '../model/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UsersComponent {

  user: IUser = {
    firstName: "bill",
    lastName: "gates",
    income: 50000,
    isWorking: true,
    company: "Microsoft",
    dob: new Date("Dec 21, 1964"),
    img: "./assets/bill.jpg",
    votes: 120
  }


  onMoreInfo(company: string) {
    alert(`User is working with ${company}`)
  }

}
