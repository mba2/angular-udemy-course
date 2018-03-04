// import { ADD_TO_DO2 } from './actions/add_to_do';
import { tassign } from 'tassign';

import { ADD_TO_DO, REMOVE_TO_DO, TOGGLE_TO_DO, UPDATE_TO_DO, CLEAR_TO_DO } from './actions/actions';


export interface IAppState {
  totalItens: number;
  lastUpdate: any;
  todos: any[];
  lastToDoId: any;
}

export const INITIAL_STATE = {
  totalItens: 1,
  lastUpdate: new Date(),
  todos: [{ id: 1, title: 'Example'}],
  lastTodoId : 1
};

export function rootReducer(state: IAppState, action): IAppState {
  console.log(action);
  switch (action.type) {
    case ADD_TO_DO:
      return  tassign(state, {
        totalItens : state.totalItens + 1,
        lastUpdate : new Date(),
        todos : state.todos.concat({
          id: state.lastToDoId + 1,
          title : action.newTodo
        })
      });
    case TOGGLE_TO_DO:
      return tassign(state, { lastUpdate : new Date()});
    case REMOVE_TO_DO:
      return tassign(state, {
        totalItens : state.totalItens - 1,
        lastUpdate : new Date(),
        todos : state.todos.filter( (item) => item.id !== action.body.id)
      });
    // case CLEAR_TO_DO:
    //   return tassign(state, {});
    default:
      break;
  }
  return state;
}

// export function rootReducer(state: IAppState, action): IAppState {
//   console.log(ADD_TO_DO2);
//   switch (action.type) {
//     case ADD_TO_DO:
//       return  tassign(state, {
//         totalItens : state.totalItens + 1,
//         lastUpdate : new Date(),
//         todos : state.todos.concat({
//           id: state.todos[state.todos.length - 1].id + 1 , title : action.newTodo
//         })
//       });
//     default:
//       break;
//   }
//   return state;
// }
