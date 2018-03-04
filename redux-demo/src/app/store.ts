import { tassign } from 'tassign';
import { fromJS, Map} from 'immutable';
/**
 * ACTIONS
 */
import { INCREMENT } from './actions/actions';

class ExampleClass {
  constructor(private state, private action) {}
  
  increment() { 
    // return Object.assign({}, this.state, { counter : this.state.counter + 1});
    return  tassign(this.state, { counter : this.state.counter + 1});
  }
}

export interface IAppState {
  counter: number;
  // messaging?: {
  //   newMessages: number;
  // };
}

export const INITIAL_STATE = {
  counter : 0,
  // messaging: {
  //   newMessages: 5
  // }
};

/**
 * APPROACH : using tassign() to prevent object Mutation
 */
export function rootReducer(state: IAppState, action): IAppState {
  const example_actions = new ExampleClass(state,action);
  switch (action.type) {
    case 'INCREMENT': 
      return example_actions.increment();
    default:
      break;
  }
  return state;
}

/**
 * APPROACH : using Immutable JS to prevent object Mutation
 */
// export function rootReducer(state: Map<string, any>, action): Map<string, any> {
//   switch (action.type) {
//     case 'INCREMENT':
//       return  state.set( 'counter' , state.get('counter') + 1);
//     default:
//       break;
//   }
//   return state;
// }
