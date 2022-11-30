import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentTypeRoutingModule } from './payment-type-routing.module';
import { PaymentTypeComponent } from './payment-type.component';


@NgModule({
  declarations: [
    PaymentTypeComponent
  ],
  imports: [
    CommonModule,
    PaymentTypeRoutingModule
  ]
})
export class PaymentTypeModule { }
