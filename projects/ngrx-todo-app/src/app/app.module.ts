import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatSlideToggleModule,
  MatFormFieldModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { TodoListComponent } from 'projects/ngrx-todo-app/src/app/view/todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { TodoComponent } from './view/todo-list/todo/todo.component';
import { rootReducer } from 'projects/ngrx-todo-app/src/app/store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer)
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
