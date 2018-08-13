import { Injectable } from '@angular/core';
import { State, TodosStore } from 'projects/akita-todo-app/src/app/state/todo.store';
import { Todo } from './todo.model';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { VISIBILITY_FILTER } from 'projects/akita-todo-app/src/app/view/filter/filter.model';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<State, Todo> {
  public selectVisibilityFilter$ = this.select((state) => state.filter);

  public selectVisibleTodos$ = combineLatest(
    this.selectVisibilityFilter$,
    this.selectAll(),
    this.getVisibleTodos
  );

  constructor(protected store: TodosStore) {
    super(store);
  }

  private getVisibleTodos(filter, todos): Todo[] {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case VISIBILITY_FILTER.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        return todos;
    }
  }
}
