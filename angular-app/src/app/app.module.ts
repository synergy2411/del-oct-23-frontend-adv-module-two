import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [     // Component / Directive / Pipes
    AppComponent, UsersComponent
  ],
  imports: [      // Module
    BrowserModule
  ],
  providers: [],      // Service
  bootstrap: [AppComponent]
})
export class AppModule { }
