import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsInstituteComponent } from './details-institute.component';

const routes: Routes = [
  {
    path:"",
    component:DetailsInstituteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsInstituteRoutingModule { }
