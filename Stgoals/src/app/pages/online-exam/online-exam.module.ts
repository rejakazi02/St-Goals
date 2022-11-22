import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineExamRoutingModule } from './online-exam-routing.module';
import { OnlineExamComponent } from './online-exam.component';


@NgModule({
  declarations: [OnlineExamComponent],
  imports: [
    CommonModule,
    OnlineExamRoutingModule
  ]
})
export class OnlineExamModule { }
