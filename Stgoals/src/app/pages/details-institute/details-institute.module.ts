import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsInstituteRoutingModule } from './details-institute-routing.module';
import { DetailsInstituteComponent } from './details-institute.component';


@NgModule({
  declarations: [DetailsInstituteComponent],
  imports: [
    CommonModule,
    DetailsInstituteRoutingModule
  ]
})
export class DetailsInstituteModule { }
