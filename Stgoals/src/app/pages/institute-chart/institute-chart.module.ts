import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteChartRoutingModule } from './institute-chart-routing.module';
import { InstituteChartComponent } from './institute-chart.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [InstituteChartComponent],
  imports: [
    CommonModule,
    InstituteChartRoutingModule,
    MatMenuModule,
    MatExpansionModule,
    MatIconModule,
  ]
})
export class InstituteChartModule { }
