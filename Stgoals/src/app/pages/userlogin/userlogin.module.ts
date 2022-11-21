import { UserloginComponent } from './userlogin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserloginRoutingModule } from './userlogin-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserloginComponent],
  imports: [
    CommonModule,
    UserloginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserloginModule { }
