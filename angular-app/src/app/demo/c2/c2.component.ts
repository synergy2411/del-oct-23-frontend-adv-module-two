import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
})
export class C2Component {

  constructor(private counterService: CounterService) { }

  increaseCounter() {
    this.counterService.counter++;
  }

  getCounter() {
    return this.counterService.counter;
  }

}
