import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IAmLazyComponent } from './components/i-am-lazy/i-am-lazy.component';


// http://localhost:4200/lazy

@NgModule({
  declarations: [
    IAmLazyComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild([{ path: "", component: IAmLazyComponent }])
  ]
})
export class LazyModule { }
