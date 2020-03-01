import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'create-todo'},
  {path: 'create-todo', component: TodoCreateComponent},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'todo-edit/:id', component: TodoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
