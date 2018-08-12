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
import { TodoListComponent } from 'projects/ngxs-todo-app/src/app/view/todo-list/todo-list.component';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from 'projects/ngxs-todo-app/src/app/store/state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { TodoComponent } from './view/todo-list/todo/todo.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

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
    NgxsModule.forRoot([
      TodoState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    SimpleNotificationsModule.forRoot()
  ],
  exports: [
    SimpleNotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
