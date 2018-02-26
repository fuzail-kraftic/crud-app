import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'todo-list',
    component: TodoComponent
  },
  {
    path: 'todo-add',
    component: TodoAddComponent
  },
  {
    path: 'todo-edit/:id',
    component: TodoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
