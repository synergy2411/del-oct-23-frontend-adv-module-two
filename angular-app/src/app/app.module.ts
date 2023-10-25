import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './demo/auth/auth.component';
import { C1Component } from './demo/c1/c1.component';
import { C2Component } from './demo/c2/c2.component';
import { DemoPipeComponent } from './demo/demo-pipe/demo-pipe.component';
import { LifeCycleComponent } from './demo/life-cycle/life-cycle.component';
import { ObservableDemoComponent } from './demo/observable-demo/observable-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { CommentFormComponent } from './users/comment-form/comment-form.component';
import { UserImgComponent } from './users/user-img/user-img.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UsersComponent } from './users/users.component';
import { LoggerInterceptor } from './services/interceptors/logger.interceptor';

@NgModule({
  declarations: [     // Component / Directive / Pipes
    AppComponent, UsersComponent, UserImgComponent, UserInfoComponent, LifeCycleComponent, UserCommentsComponent, CountryCodePipe, DemoPipeComponent, ReversePipe, FilterPipe, SortPipe, CommentFormComponent, AuthComponent, C1Component, C2Component, ObservableDemoComponent
  ],
  imports: [      // Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: LoggerInterceptor
    }
  ],      // Service
  bootstrap: [AppComponent]
})
export class AppModule { }
