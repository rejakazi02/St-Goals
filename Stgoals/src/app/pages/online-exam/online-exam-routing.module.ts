import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineExamComponent } from './online-exam.component';

const routes: Routes = [
  {
    path:"",
    component:OnlineExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineExamRoutingModule { }
