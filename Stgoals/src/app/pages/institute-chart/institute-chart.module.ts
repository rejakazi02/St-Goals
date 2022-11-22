import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteChartRoutingModule } from './institute-chart-routing.module';
import { InstituteChartComponent } from './institute-chart.component';


@NgModule({
  declarations: [InstituteChartComponent],
  imports: [
    CommonModule,
    InstituteChartRoutingModule
  ]
})
export class InstituteChartModule { }
