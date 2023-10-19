import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../model/comment.interface';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit {

  @Input() comments: Array<IComment>;

  tab = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
