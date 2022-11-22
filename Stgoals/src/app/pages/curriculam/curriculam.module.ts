import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculamRoutingModule } from './curriculam-routing.module';
import { CurriculamComponent } from './curriculam.component';


@NgModule({
  declarations: [CurriculamComponent],
  imports: [
    CommonModule,
    CurriculamRoutingModule
  ]
})
export class CurriculamModule { }
