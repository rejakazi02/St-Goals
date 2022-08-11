import { FooterModule } from './../shared/components/footer/footer.module';
import { HeaderModule } from './../core/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    RegistrationComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class PagesModule { }
