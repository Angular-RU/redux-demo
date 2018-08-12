export class AddTodo {
  public static readonly type = '[TODO] add';

  constructor(public payload: string) {
  }
}

export class DeleteTodo {
  public static readonly type = '[TODO] delete';

  constructor(public payload: number) {
  }
}

export class UpdateTodo {
  public static readonly type = '[TODO] update';

  constructor(public payload: { id: number, text: string }) {
  }
}

export class ToggleTodo {
  public static readonly type = '[TODO] toggle';

  constructor(public payload: number) {
  }
}
