import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAdmissionFormRoutingModule } from './student-admission-form-routing.module';
import { StudentAdmissionFormComponent } from './student-admission-form.component';


@NgModule({
  declarations: [StudentAdmissionFormComponent],
  imports: [
    CommonModule,
    StudentAdmissionFormRoutingModule
  ]
})
export class StudentAdmissionFormModule { }
