import { ActionReducerMap } from '@ngrx/store';

import { TodosReducer } from './reducers/todo.reducer';
import { Todo } from 'projects/ngrx-todo-app/src/app/core/models/Todo';

export interface AppState {
  todos: Todo[];
}

export const rootReducer: ActionReducerMap<AppState> = {
  todos: TodosReducer
};
