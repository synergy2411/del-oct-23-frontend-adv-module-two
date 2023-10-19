import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent implements OnInit {

  contactNumber = "987654321";

  filteredStatus = "";

  isAscending = true;

  todoCollection = [
    { label: "shopping", status: "pending" },
    { label: "grocery", status: "completed" },
    { label: "planting", status: "pending" },
    { label: "insurance", status: "completed" },
  ]


  addNew() {
    this.todoCollection.push({ label: "New Item", status: "pending" });

  }
  constructor() { }

  ngOnInit(): void {
  }

}
