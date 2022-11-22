import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteListRoutingModule } from './institute-list-routing.module';
import { InstituteListComponent } from './institute-list.component';


@NgModule({
  declarations: [InstituteListComponent],
  imports: [
    CommonModule,
    InstituteListRoutingModule,
    MatIconModule
  ]
})
export class InstituteListModule { }
