import { Injectable } from '@angular/core';
import { Store } from './store';

export class TodoState {
  public todos: string[] = [];
}

@Injectable()
export class TodoStoreService extends Store<TodoState> {
  constructor() {
    super(new TodoState());
  }

  public addTodo(payload: string): void {
    this.setState({
      ...this.state,
      todos: [...this.state.todos, payload]
    });
  }
}
