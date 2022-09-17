import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamResultComponent } from './exam-result.component';

const routes: Routes = [
  {
    path:"",
    component:ExamResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamResultRoutingModule { }
