import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';

const routes: Routes = [
  { path: '', component: UserListComponent }, // Ruta para la lista de usuarios
  { path: ':id', component: UsersDetailComponent } // Ruta para detalles de usuario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
