import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';
import { ReadingDataComponent } from './reading-data/reading-data.component';
import { ReadingDataAsyncComponent } from './reading-data-async/reading-data-async.component';
import { AccessingPropertiesComponent } from './accessing-properties/accessing-properties.component';
import { AddingObjectComponent } from './adding-object/adding-object.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadingDataComponent,
    ReadingDataAsyncComponent,
    AccessingPropertiesComponent,
    AddingObjectComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
