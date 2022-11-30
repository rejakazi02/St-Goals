import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentSuccesfulRoutingModule } from './payment-succesful-routing.module';
import { PaymentSuccesfulComponent } from './payment-succesful.component';


@NgModule({
  declarations: [
    PaymentSuccesfulComponent
  ],
  imports: [
    CommonModule,
    PaymentSuccesfulRoutingModule
  ]
})
export class PaymentSuccesfulModule { }
