import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineClassRoutingModule } from './online-class-routing.module';
import { OnlineClassComponent } from './online-class.component';


@NgModule({
  declarations: [OnlineClassComponent],
  imports: [
    CommonModule,
    OnlineClassRoutingModule
  ]
})
export class OnlineClassModule { }
