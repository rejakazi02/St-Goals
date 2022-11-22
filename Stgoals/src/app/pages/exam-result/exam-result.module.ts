import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamResultRoutingModule } from './exam-result-routing.module';
import { ExamResultComponent } from './exam-result.component';


@NgModule({
  declarations: [ExamResultComponent],
  imports: [
    CommonModule,
    ExamResultRoutingModule
  ]
})
export class ExamResultModule { }
