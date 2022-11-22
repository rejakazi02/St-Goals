import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultCardRoutingModule } from './result-card-routing.module';
import { ResultCardComponent } from './result-card.component';


@NgModule({
  declarations: [ResultCardComponent],
  imports: [
    CommonModule,
    ResultCardRoutingModule
  ]
})
export class ResultCardModule { }
