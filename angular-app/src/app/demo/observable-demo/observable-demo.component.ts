import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, Subscription, of, interval, fromEvent, take, filter } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {


  interval$ = interval(500)

  onSubscribe() {
    this.interval$.pipe(
      take(10),
      filter(val => val % 2 == 0)
    ).subscribe(console.log);
  }



  // @ViewChild("search") searchTerm: ElementRef<HTMLInputElement>;


  // ngAfterViewInit(): void {
  //   console.log("SEARCH : ", this.searchTerm);
  //   const fromEvent1$ = fromEvent(this.searchTerm.nativeElement, "input");

  //   fromEvent1$.subscribe((event: { target: EventTarget }) => console.log(event.target));
  // }



  // fromEvent$ = fromEvent(document, "click");

  // interval$ = interval(1000);

  // of$ = of("First", "data", "Third")


  // obs$ = new Observable((observer) => {
  //   setTimeout(() => {
  //     observer.next("First Package");
  //   }, 1000)
  //   setTimeout(() => {
  //     observer.next("Second Package");
  //   }, 2000)
  //   setTimeout(() => {
  //     observer.next("Third Package");
  //   }, 4000)
  //   // setTimeout(() => observer.error(new Error("Something went wrong")), 5000)
  //   setTimeout(() => observer.complete(), 5000);


  // });

  // unSub$: Subscription;

  // onSubscribe() {

  //   this.unSub$ = this.interval$.subscribe(console.log)

  //   // this.of$.subscribe(console.log);



  //   // this.unSub$ = this.obs$.subscribe(
  //   //   data => console.log("DATA : ", data)
  //   // )

  //   // this.obs$.subscribe({
  //   //   next: (data) => console.log(data),
  //   //   error: err => console.error("ERROR ---->", err),
  //   //   complete: () => console.log("COMPLETED")
  //   // })
  // }


  // onUnsubscribe() {
  //   this.unSub$.unsubscribe();
  // }


  // constructor() { }


  // ngOnInit(): void {

  //   this.fromEvent$.subscribe(console.log)

  // }

}
