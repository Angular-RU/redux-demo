import { BehaviorSubject, Observable } from 'rxjs';


export class Store<T> {
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject(initialState);
  }

  public get state$(): Observable<T> {
    return this._state$.asObservable();
  }

  public get state(): T {
    return this._state$.getValue();
  }

  public setState(nextState: T): void {
    this._state$.next(nextState);
    console.log(nextState);
  }
}
