import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';

/**
 * ACTIONS
 */
import { INCREMENT } from './actions/actions';

/**
 * STORE
 */
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  @select('counter') counter;
  /**
   * ACCESSING BY USIGN AN ARRAY....SO IN THE HTML YOU'LL HAVE ACCESS
   * USING messaging.newMessages
  */
  // @select(['messaging', 'newMessages']) newMessagesCounter;
  
  /**
   * ACCESSING USING A FUNCTION....SO IN THE HTML YOU'LL HAVE ACCESS
   * USING messaging.newMessages
   */
  // @select((s: IAppState) => s.messaging.newMessages) newMessagesCounter;

  /**
    * APPROACH : using Immutable JS to prevent object Mutation
   */
  // @select(s => s.get('counter')) counter;


  /**
   * APPROACH : NOMRAL!!
   */
  constructor(private ngRedux: NgRedux<IAppState>) { }

  /**
   * APPROACH : using Immutable JS to prevent object Mutation
   */
  // constructor(private ngRedux: NgRedux<Map<string,any>>) {}

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT});
    // console.log(this.ngRedux.getState());
  }
}
