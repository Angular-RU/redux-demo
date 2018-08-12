import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Todo } from 'projects/ngxs-todo-app/src/app/core/models/Todo';
import { AddTodo, UpdateTodo, ToggleTodo, DeleteTodo } from 'projects/ngxs-todo-app/src/app/store/actions';
import { NotificationsService } from 'angular2-notifications';
import { initialTodos } from 'projects/ngxs-todo-app/src/app/core/constants/initialTodos';

export class TodoStateModel {
  public todos: Todo[];
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: [
      ...initialTodos
    ]
  }
})

export class TodoState {
  constructor(private notify: NotificationsService) {
  }

  @Selector()
  public static getTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Action(AddTodo)
  public add({ getState, patchState }: StateContext<TodoStateModel>, { payload }: AddTodo) {
    patchState({
      todos: [...getState().todos, {
        id: Math.round(Math.random() * 1000),
        text: payload,
        completed: false
      }]
    });
  }

  @Action(DeleteTodo)
  public delete({ getState, patchState }: StateContext<TodoStateModel>, { payload }: DeleteTodo) {
    patchState({
      todos: getState().todos.filter((td) => td.id !== payload)
    });
  }

  @Action(UpdateTodo)
  public update({ getState, patchState }: StateContext<TodoStateModel>, { payload }: UpdateTodo) {
    patchState({
      todos: getState().todos.map((td) => {
        if (td.id === payload.id) {
          td.text = payload.text;
        }
        return td;
      })
    });
  }

  @Action(ToggleTodo)
  public toggle({ getState, patchState }: StateContext<TodoStateModel>, { payload }: ToggleTodo) {
    patchState({
      todos: getState().todos.map((td) => {
        if (td.id === payload) {
          td.completed = !td.completed;
        }
        return td;
      })
    });
  }

}
