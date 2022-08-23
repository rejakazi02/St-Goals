import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteListComponent } from './institute-list.component';
const routes: Routes = [
  {
    path:"",
    component:InstituteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteListRoutingModule { }
