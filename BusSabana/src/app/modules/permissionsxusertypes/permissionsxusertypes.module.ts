import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsxusertypesRoutingModule } from './permissionsxusertypes-routing.module';
import { PermissionsxusertypesListComponent } from './permissionsxusertypes-list/permissionsxusertypes-list.component';
import { PermissionsxusertypesDetailComponent } from './permissionsxusertypes-detail/permissionsxusertypes-detail.component';


@NgModule({
  declarations: [
    PermissionsxusertypesListComponent,
    PermissionsxusertypesDetailComponent
  ],
  imports: [
    CommonModule,
    PermissionsxusertypesRoutingModule
  ]
})
export class PermissionsxusertypesModule { }
