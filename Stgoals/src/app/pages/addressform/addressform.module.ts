import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressformRoutingModule } from './addressform-routing.module';
import { AddressformComponent } from './addressform.component';


@NgModule({
  declarations: [AddressformComponent],
  imports: [
    CommonModule,
    AddressformRoutingModule
  ]
})
export class AddressformModule { }
