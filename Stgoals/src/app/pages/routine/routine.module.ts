import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutineRoutingModule } from './routine-routing.module';
import { RoutineComponent } from './routine.component';


@NgModule({
  declarations: [RoutineComponent],
  imports: [
    CommonModule,
    RoutineRoutingModule
  ]
})
export class RoutineModule { }
