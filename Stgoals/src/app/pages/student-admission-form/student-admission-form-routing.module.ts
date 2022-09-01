import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAdmissionFormComponent } from './student-admission-form.component';
const routes: Routes = [
  {
    path:"",
    component:StudentAdmissionFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAdmissionFormRoutingModule { }
