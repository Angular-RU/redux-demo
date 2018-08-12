import { Action } from '@ngrx/store';

export const ADD_TODO    = '[TODO] add';
export const DELETE_TODO = '[TODO] delete';
export const TOGGLE_TODO = '[TODO] toggle';
export const UPDATE_TODO = '[TODO] update';

export class AddTodoAction implements Action {
  public readonly type = ADD_TODO;
  public id: number;

  constructor(public text: string) {
    this.id = Math.random();
  }
}

export class DeleteTodoAction implements Action {
  public readonly type = DELETE_TODO;

  constructor(public id: number) {}
}

export class ToggleAction implements Action {
  public readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class UpdateAction implements Action {
  public readonly type = UPDATE_TODO;

  constructor(public id: number,
              public text: string) {}
}

export type TodoActionType =
  AddTodoAction |
  ToggleAction |
  DeleteTodoAction |
  UpdateAction;
