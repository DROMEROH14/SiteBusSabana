import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsertypesRoutingModule } from './usertypes-routing.module';
import { UsertypesListComponent } from './usertypes-list/usertypes-list.component';
import { UsertypesDetailComponent } from './usertypes-detail/usertypes-detail.component';


@NgModule({
  declarations: [
    UsertypesListComponent,
    UsertypesDetailComponent
  ],
  imports: [
    CommonModule,
    UsertypesRoutingModule
  ]
})
export class UsertypesModule { }
