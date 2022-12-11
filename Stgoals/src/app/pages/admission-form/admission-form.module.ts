import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionFormRoutingModule } from './admission-form-routing.module';
import { AdmissionFormComponent } from './admission-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdmissionFormComponent],
  imports: [
    CommonModule,
    AdmissionFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class AdmissionFormModule { }
