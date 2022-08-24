import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteChartComponent } from './institute-chart.component';
const routes: Routes = [
  {
    path:"",
    component:InstituteChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteChartRoutingModule { }
