import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusesRoutingModule } from './buses-routing.module';
import { BusesDetailComponent } from './buses-detail/buses-detail.component';
import { BusesListComponent } from './buses-list/buses-list.component';


@NgModule({
  declarations: [
    BusesDetailComponent,
    BusesListComponent
  ],
  imports: [
    CommonModule,
    BusesRoutingModule
  ]
})
export class BusesModule { }
