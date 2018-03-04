import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
/**
 * REDUX
 */
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
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
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension) {

    const enhancers = isDevMode ? devTools.enhancer() : [];

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], [enhancers]);
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
