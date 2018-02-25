import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * REDUX
 */
import { NgRedux, NgReduxModule } from 'ng2-redux';
/**
 * STORE
 */
import { IAppState, rootReducer, INITIAL_STATE } from './store';

/**
 * IMMUTABLE JS
*/
import { fromJS, Map } from 'immutable';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}

/**
 * APPROACH : using Immutable JS to prevent object Mutation
 */
// export class AppModule {
//   constructor(ngRedux: NgRedux<Map<string, any>>) {
//     ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
//   }
// }
