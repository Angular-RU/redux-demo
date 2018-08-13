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
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { TodosFiltersComponent } from 'projects/akita-todo-app/src/app/view/filter/filters.component';
import { TodoListComponent } from 'projects/akita-todo-app/src/app/view/todo-list/todo-list.component';
import { TodoComponent } from 'projects/akita-todo-app/src/app/view/todo-list/todo/todo.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

@NgModule({
  declarations: [
    AppComponent,
    TodosFiltersComponent,
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
    MatSelectModule,
    AkitaNgDevtools.forRoot()
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
