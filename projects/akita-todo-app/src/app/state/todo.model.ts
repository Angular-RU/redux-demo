import { ID } from '@datorama/akita';

let id = 1;

export class Todo {
  public id: ID;
  public title: string;
  public completed: boolean;
}

export function createTodo({ title }: Partial<Todo>) {
  return {
    id: id++,
    title,
    completed: false
  } as Todo;
}
