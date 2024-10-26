import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { AssignmentsListComponent } from './assignments-list/assignments-list.component';
import { AssignmentsDetailComponent } from './assignments-detail/assignments-detail.component';


@NgModule({
  declarations: [
    AssignmentsListComponent,
    AssignmentsDetailComponent
  ],
  imports: [
    CommonModule,
    AssignmentsRoutingModule
  ]
})
export class AssignmentsModule { }
