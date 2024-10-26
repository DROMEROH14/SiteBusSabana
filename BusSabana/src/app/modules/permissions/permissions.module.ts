import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsListComponent } from './permissions-list/permissions-list.component';
import { PermissionsDetailComponent } from './permissions-detail/permissions-detail.component';


@NgModule({
  declarations: [
    PermissionsListComponent,
    PermissionsDetailComponent
  ],
  imports: [
    CommonModule,
    PermissionsRoutingModule
  ]
})
export class PermissionsModule { }
