import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Todo } from 'projects/ngrx-todo-app/src/app/core/models/Todo';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/ngrx-todo-app/src/app/store/app.reducer';
import * as TodoActions from 'projects/ngrx-todo-app/src/app/store/actions/todo.actions';

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

  constructor(private store: Store<AppState>) {
    this.textField = new FormControl('', [Validators.required]);
    this.checkField = new FormControl(false);
    this.checkField.valueChanges
      .subscribe(() => {
        const action = new TodoActions.ToggleAction(this.todo.id);
        this.store.dispatch(action);
      });
  }

  public ngOnInit() {
    this.textField.setValue(this.todo.text);
    this.checkField.setValue(this.todo.completed, { emitEvent: false });
  }

  public deleteTodo(id: number) {
    const action = new TodoActions.DeleteTodoAction(id);
    this.store.dispatch(action);
  }

  public updateTodo(id: number, text: string) {
    if (this.textField.valid && this.editing) {
      const action = new TodoActions.UpdateAction(id, text);
      this.store.dispatch(action);
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
