import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtpformRoutingModule } from './otpform-routing.module';
import { OtpformComponent } from './otpform.component';


@NgModule({
  declarations: [OtpformComponent],
  imports: [
    CommonModule,
    OtpformRoutingModule
  ]
})
export class OtpformModule { }
