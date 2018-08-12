import { Component } from '@angular/core';
import { TodoStoreService } from './store/todo-store.service';

@Component({
  selector: 'app-service',
  template: `
    <div>
      <input [(ngModel)]="todo" type="text">
      <button [disabled]="!todo" (click)="addTodo(todo)">Add</button>

      <ul>
        <li *ngFor="let todo of (todoStoreService.state$ | async).todos">
          {{ todo }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  public todo: string;

  constructor(public todoStoreService: TodoStoreService) {
  }

  public addTodo(todo: string) {
    this.todoStoreService.addTodo(todo);
  }

}
