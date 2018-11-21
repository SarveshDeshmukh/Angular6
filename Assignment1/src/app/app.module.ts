import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { FailureAlertComponent } from './failure-alert/failure-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SucessAlertComponent,
    FailureAlertComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
