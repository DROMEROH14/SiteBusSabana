import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { RoutesDetailComponent } from './routes-detail/routes-detail.component';


@NgModule({
  declarations: [
    RoutesListComponent,
    RoutesDetailComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
