import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { initialFilters, VISIBILITY_FILTER } from 'projects/akita-todo-app/src/app/view/filter/filter.model';
import { Todo } from 'projects/akita-todo-app/src/app/state/todo.model';
import { TodosQuery } from 'projects/akita-todo-app/src/app/state/todo.query';
import { TodosService } from 'projects/akita-todo-app/src/app/state/todos.service';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
  public title: string;
  public todos$: Observable<Todo[]>;
  public activeFilter$: Observable<VISIBILITY_FILTER>;
  public selectAllDone$: Observable<boolean>;
  public filters = initialFilters;

  constructor(private todosQuery: TodosQuery,
              private todosService: TodosService) {
  }

  public ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
    this.selectAllDone$ = this.todosQuery.selectAllDone$;
  }

  public add(input: HTMLInputElement) {
    this.todosService.add(input.value);
    input.value = '';
  }

  public complete(todo: Todo) {
    this.todosService.complete(todo);
  }

  public delete(id: ID) {
    this.todosService.delete(id);
  }

  public changeFilter(filter: VISIBILITY_FILTER) {
    this.todosService.updateFilter(filter);
  }

}
