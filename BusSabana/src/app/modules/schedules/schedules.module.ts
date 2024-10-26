import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesListComponent } from './schedules-list/schedules-list.component';
import { SchedulesDetailComponent } from './schedules-detail/schedules-detail.component';


@NgModule({
  declarations: [
    SchedulesListComponent,
    SchedulesDetailComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule
  ]
})
export class SchedulesModule { }
