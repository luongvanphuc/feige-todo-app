import { Action } from '@ngrx/store';
import { Todo } from '../services/todo';

export const GET_ALL_TODOS = 'GET_ALL_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export class GetAllTodos implements Action {
  readonly type = GET_ALL_TODOS;
  constructor(public payload: Array<Todo>) { }
}

export class CreateTodo implements Action {
  readonly type = CREATE_TODO;
  constructor(public payload: Todo) { }
}

export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO;
  constructor(public payload: Todo) { }
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;
  constructor(public payload: number) { }
}

export type ActionsType = GetAllTodos | CreateTodo | UpdateTodo | DeleteTodo;
