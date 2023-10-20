import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],

})
export class C1Component implements OnInit {

  constructor(private counterService: CounterService) { }

  increaseCounter() {
    this.counterService.counter++;
  }

  getCounter() {
    return this.counterService.counter;
  }

  ngOnInit(): void {
  }

}
