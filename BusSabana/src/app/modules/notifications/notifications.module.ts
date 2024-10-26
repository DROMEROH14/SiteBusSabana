import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { NotificationsDetailComponent } from './notifications-detail/notifications-detail.component';


@NgModule({
  declarations: [
    NotificationsListComponent,
    NotificationsDetailComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
