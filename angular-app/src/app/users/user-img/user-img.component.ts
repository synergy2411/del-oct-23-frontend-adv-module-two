import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../model/user.interface';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent {
  @Input("user") user: IUser;

  @Output() childEvent = new EventEmitter<string>();

  btnClick() {
    this.childEvent.emit(this.user.company);
    // this.childEvent.emit("Apple");
  }
}
