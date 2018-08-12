import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Todo } from 'projects/ngxs-todo-app/src/app/core/models/Todo';
import { DeleteTodo, ToggleTodo, UpdateTodo } from 'projects/ngxs-todo-app/src/app/store/actions';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit {
  @ViewChild('textInput') public textInput: ElementRef;
  @Input() public todo: Todo;
  public textField: FormControl;
  public checkField: FormControl;
  public editing: boolean;

  constructor(private store: Store,
              private notify: NotificationsService) {
    this.textField = new FormControl('', [Validators.required]);
    this.checkField = new FormControl(false);
    this.checkField.valueChanges
      .subscribe(() => {
        this.store.dispatch(new ToggleTodo(this.todo.id));
      });
  }

  public ngOnInit() {
    this.textField.setValue(this.todo.text);
    this.checkField.setValue(this.todo.completed, { emitEvent: false });
  }

  public deleteTodo(id: number) {
    this.store.dispatch(new DeleteTodo(id)).subscribe(() => {
      this.notify.warn('Задача успешно удалена!');
    });
  }

  public updateTodo(id: number, text: string) {
    if (this.textField.valid && this.editing) {
      this.store.dispatch(new UpdateTodo({ id, text })).subscribe(() => {
        this.notify.info('Успешно!');
      });
      this.editing = false;
    }
  }

  public activeEditMode() {
    if (!this.todo.completed) {
      this.editing = true;
      setTimeout(() => {
        this.textInput.nativeElement.focus();
      });
    }
  }

}
