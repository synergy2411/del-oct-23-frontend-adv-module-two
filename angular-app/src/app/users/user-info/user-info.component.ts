import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  @Input("usr") user: any;

  // dynamicClasses = ['my-border', 'my-font'];

  dynamicClasses = {
    'my-border': true,
    'my-font': false
  }

  dynamicStyles = {
    'text-decoration': 'underline'
  }

  onMouseEnter() {
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border']
    this.dynamicClasses['my-font'] = !this.dynamicClasses['my-font']
  }

  dobMouseEnter() {
    this.dynamicStyles['text-decoration'] = 'none';
  }

  dobMouseLeave() {
    this.dynamicStyles['text-decoration'] = 'underline';
  }

}
