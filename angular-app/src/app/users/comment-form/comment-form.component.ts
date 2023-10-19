import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { IComment } from 'src/app/model/comment.interface';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Output() newCommentEvent = new EventEmitter<IComment>();

  submitHandler(myForm: NgForm) {
    this.newCommentEvent.emit(myForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
