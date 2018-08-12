import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

export const getState = (state: AppState) => state;
export const getTodos = (state: AppState) => state.todos;

export const getStateCompleted = createSelector(getTodos, (todos) => {
  return todos.every((todo) => todo.completed);
});
