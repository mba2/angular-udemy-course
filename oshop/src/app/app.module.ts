import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/** 
 *  COMPONENTS
 */
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
/**
 * DATABASE 
 */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
/** 
 * REDUX
 *
/** 
 * SERVICES
 */
/** 
 * APP MISC
 */
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
