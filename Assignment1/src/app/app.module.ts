import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { FailureAlertComponent } from './failure-alert/failure-alert.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';

@NgModule({
  declarations: [
    AppComponent,
    SucessAlertComponent,
    FailureAlertComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
