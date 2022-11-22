import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegformRoutingModule } from './regform-routing.module';
import { RegformComponent } from './regform.component';


@NgModule({
  declarations: [RegformComponent],
  imports: [
    CommonModule,
    RegformRoutingModule
  ]
})
export class RegformModule { }
