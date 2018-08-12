import { Todo } from 'projects/ngrx-todo-app/src/app/core/models/Todo';
import * as TodoActions from '../actions/todo.actions';
import { initialTodos } from 'projects/ngrx-todo-app/src/app/core/constants/initialTodos';

const initialState: Todo[] = [
  ...initialTodos
];

export function TodosReducer(state: Todo[] = initialState, action: TodoActions.TodoActionType) {
  switch (action.type) {
    case TodoActions.ADD_TODO: {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    }
    case TodoActions.TOGGLE_TODO: {
      return state.map((todo) => {
        if (action.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
    }
    case TodoActions.DELETE_TODO: {
      return state.filter((todo) => action.id !== todo.id );
    }
    case TodoActions.UPDATE_TODO: {
      return state.map((todo) => {
        if (action.id === todo.id) {
          return {
            ...todo,
            text: action.text
          };
        } else {
          return todo;
        }
      });
    }
    default: {
      return state;
    }
  }
}
