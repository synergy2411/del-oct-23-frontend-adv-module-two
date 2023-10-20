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

@NgModule({
  declarations: [     // Component / Directive / Pipes
    AppComponent, UsersComponent, UserImgComponent, UserInfoComponent, LifeCycleComponent, UserCommentsComponent, CountryCodePipe, DemoPipeComponent, ReversePipe, FilterPipe, SortPipe, CommentFormComponent, AuthComponent
  ],
  imports: [      // Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],      // Service
  bootstrap: [AppComponent]
})
export class AppModule { }
