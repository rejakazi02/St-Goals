import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsInfoRoutingModule } from './sms-info-routing.module';
import { SmsInfoComponent } from './sms-info.component';


@NgModule({
  declarations: [SmsInfoComponent],
  imports: [
    CommonModule,
    SmsInfoRoutingModule
  ]
})
export class SmsInfoModule { }
