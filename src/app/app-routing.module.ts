import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { UsersComponent } from './MyComponents/users/users.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'apiCall' , component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
