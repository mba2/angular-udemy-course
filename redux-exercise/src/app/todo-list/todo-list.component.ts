import { ADD_TO_DO, TOGGLE_TO_DO, REMOVE_TO_DO, CLEAR_TO_DO } from './../actions/actions';
import { IAppState } from '../store';
import { NgRedux, select } from 'ng2-redux';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  @select('todos') todos;
  // Read the comment in TodoService
  constructor(private service: TodoService, private ngRedux: NgRedux<IAppState>) { }

  addTodo(input) {
    if (!input.value) { return; }
    this.ngRedux.dispatch({ type: ADD_TO_DO, newTodo : input.value });
    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({type: TOGGLE_TO_DO});
    todo.isCompleted = !todo.isCompleted;
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TO_DO, body : {
      id : todo.id
    }});
  }

  clearTodo() {
    this.ngRedux.dispatch({type: CLEAR_TO_DO});
  }
}
