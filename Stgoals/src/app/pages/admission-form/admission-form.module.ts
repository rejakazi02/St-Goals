import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionFormRoutingModule } from './admission-form-routing.module';
import { AdmissionFormComponent } from './admission-form.component';


@NgModule({
  declarations: [AdmissionFormComponent],
  imports: [
    CommonModule,
    AdmissionFormRoutingModule
  ]
})
export class AdmissionFormModule { }
