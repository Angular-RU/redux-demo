import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from 'projects/akita-todo-app/src/app/state/todo.model';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Output() public complete = new EventEmitter<Todo>();
  @Output() public delete = new EventEmitter<ID>();
  @ViewChild('textInput') public textInput: ElementRef;
  @Input() public todo: Todo;
  public textField: FormControl;
  public checkField: FormControl;
  public editing: boolean;

  constructor() {
    this.textField = new FormControl('', [Validators.required]);
    this.checkField = new FormControl(false);
    this.checkField.valueChanges
      .subscribe((completed: boolean) => {
        this.complete.emit({ ...this.todo, completed });
      });
  }

  public ngOnInit() {
    this.textField.setValue(this.todo.title);
    this.checkField.setValue(this.todo.completed, { emitEvent: false });
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
