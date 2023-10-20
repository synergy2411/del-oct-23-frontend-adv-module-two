import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImgComponent } from './users/user-img/user-img.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { LifeCycleComponent } from './demo/life-cycle/life-cycle.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { DemoPipeComponent } from './demo/demo-pipe/demo-pipe.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { CommentFormComponent } from './users/comment-form/comment-form.component';
import { AuthComponent } from './demo/auth/auth.component';
import { DataService } from './services/data.service';
import { C1Component } from './demo/c1/c1.component';
import { C2Component } from './demo/c2/c2.component';
import { CounterService } from './services/counter.service';
import { ObservableDemoComponent } from './demo/observable-demo/observable-demo.component';

@NgModule({
  declarations: [     // Component / Directive / Pipes
    AppComponent, UsersComponent, UserImgComponent, UserInfoComponent, LifeCycleComponent, UserCommentsComponent, CountryCodePipe, DemoPipeComponent, ReversePipe, FilterPipe, SortPipe, CommentFormComponent, AuthComponent, C1Component, C2Component, ObservableDemoComponent
  ],
  imports: [      // Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [CounterService],      // Service
  bootstrap: [AppComponent]
})
export class AppModule { }
