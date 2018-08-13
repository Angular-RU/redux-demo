import { Todo } from './todo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { VISIBILITY_FILTER } from 'projects/akita-todo-app/src/app/view/filter/filter.model';
import { Injectable } from '@angular/core';

export interface State extends EntityState<Todo> {
  filter: VISIBILITY_FILTER;
}

const initialState = {
  filter: VISIBILITY_FILTER.SHOW_ALL
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<State, Todo> {
  constructor() {
    super(initialState);
  }
}
