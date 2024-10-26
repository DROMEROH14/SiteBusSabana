import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './users-list/users-list.component'; // Asegúrate de que este archivo existe y el nombre es correcto
import { UsersDetailComponent } from './users-detail/users-detail.component'; // Asegúrate de que este archivo existe y el nombre es correcto

@NgModule({
  declarations: [
    UserListComponent, // Nombre correcto
    UsersDetailComponent // Nombre correcto
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }