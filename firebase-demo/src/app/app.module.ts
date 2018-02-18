import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), //ANGULARFIRE2 MAIN MODULE 
    AngularFireDatabaseModule // THIS MODULE MUST BE SET AFTER THE MAIN ANGULARFIRE2 MAIN MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
