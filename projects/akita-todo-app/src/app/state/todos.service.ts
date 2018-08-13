import { TodosStore } from 'projects/akita-todo-app/src/app/state/todo.store';
import { createTodo, Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { VISIBILITY_FILTER } from 'projects/akita-todo-app/src/app/view/filter/filter.model';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private todosStore: TodosStore) { }

  public updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.updateRoot({
      filter
    });
  }

  public complete({ id, completed }: Todo) {
    this.todosStore.update(id, {
      completed
    });
  }

  public add(title: string) {
    const todo = createTodo({ title });
    this.todosStore.add(todo);
  }

  public delete(id: ID) {
    this.todosStore.remove(id);
  }

}
