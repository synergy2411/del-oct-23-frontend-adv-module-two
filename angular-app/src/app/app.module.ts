import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { OverviewComponent } from './products/overview/overview.component';
import { SpecificationComponent } from './products/specification/specification.component';
import { EagerModule } from './modules/eager/eager.module';

@NgModule({
  declarations: [     // Component / Directive / Pipes
    AppComponent, UsersComponent, UserImgComponent, UserInfoComponent, LifeCycleComponent, UserCommentsComponent, CountryCodePipe, DemoPipeComponent, ReversePipe, FilterPipe, SortPipe, CommentFormComponent, AuthComponent, C1Component, C2Component, ObservableDemoComponent, HeaderComponent, ProductsComponent, OverviewComponent, SpecificationComponent
  ],
  imports: [      // Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EagerModule
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
