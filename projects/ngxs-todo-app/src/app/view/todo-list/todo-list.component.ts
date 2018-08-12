import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState, TodoStateModel } from 'projects/ngxs-todo-app/src/app/store/state';
import { Observable } from 'rxjs';
import { AddTodo } from 'projects/ngxs-todo-app/src/app/store/actions';
import { NotificationImpl, notificationOptions } from 'projects/ngxs-todo-app/src/app/core/utils/common/notification.config';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
  @Select(TodoState.getTodos) public todos$: Observable<TodoStateModel>;
  public title: string;
  public options: NotificationImpl = notificationOptions;

  constructor(private store: Store,
              private notify: NotificationsService) {
  }

  public ngOnInit(): void {
  }

  public addTodo(title: string) {
    this.store.dispatch(new AddTodo(title)).subscribe(
      () => {
        this.notify.success(`Задача - ${title}, успешно добавлена!`);
      });
    this.title = '';
  }

}
