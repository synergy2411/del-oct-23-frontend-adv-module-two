import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImgComponent } from './users/user-img/user-img.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { LifeCycleComponent } from './demo/life-cycle/life-cycle.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';

@NgModule({
  declarations: [     // Component / Directive / Pipes
    AppComponent, UsersComponent, UserImgComponent, UserInfoComponent, LifeCycleComponent, UserCommentsComponent
  ],
  imports: [      // Module
    BrowserModule,
    FormsModule
  ],
  providers: [],      // Service
  bootstrap: [AppComponent]
})
export class AppModule { }
