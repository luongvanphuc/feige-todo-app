import { Todo } from '../services/todo';
import * as TodoActions from './todo-list.actions';

const initialState: {
  todos: Array<Todo>,
} = {
  todos: null,
};

export function todoListReducer(
  state = initialState,
  action: TodoActions.ActionsType,
) {
  switch (action.type) {
    case TodoActions.GET_ALL_TODOS: {
      return {
        ...state,
        todos: [...action.payload],
      };
    }

    case TodoActions.CREATE_TODO: {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    }

    case TodoActions.UPDATE_TODO: {
      const todoIndex = state.todos.findIndex((t) => t.id === action.payload.id);
      const todo = state.todos[todoIndex];
      const updatedTodo = {
        ...todo,
        ...action.payload,
      };
      const newUpdatedTodos = [...state.todos];
      newUpdatedTodos[todoIndex] = updatedTodo;

      return {
        ...state,
        todos: newUpdatedTodos,
      };
    }

    case TodoActions.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    }

    default:
      return state;
  }
}
