import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'projects/ngrx-todo-app/src/app/store/app.reducer';
import * as TodoActions from 'projects/ngrx-todo-app/src/app/store/actions/todo.actions';
import { Observable } from 'rxjs';
import { Todo } from 'projects/ngrx-todo-app/src/app/core/models/Todo';
import { getTodos } from 'projects/ngrx-todo-app/src/app/store/selectors/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.store.pipe(select(getTodos));
  public title: string;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {}

  public addTodo(title: string) {
    const action = new TodoActions.AddTodoAction(title);
    this.store.dispatch(action);
    this.title = '';
  }

}
