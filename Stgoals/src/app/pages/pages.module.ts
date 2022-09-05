import { FooterModule } from './../shared/components/footer/footer.module';
import { HeaderModule } from './../core/header/header.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegformComponent } from './regform/regform.component';
import { AddressformComponent } from './addressform/addressform.component';
import { OtpformComponent } from './otpform/otpform.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { VideosComponent } from './videos/videos.component';
import { ClubsComponent } from './clubs/clubs.component';
import { NotificationComponent } from './notification/notification.component';
import { InstituteListComponent } from './institute-list/institute-list.component';
import { InstituteChartComponent } from './institute-chart/institute-chart.component';
import { DetailsInstituteComponent } from './details-institute/details-institute.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { StudentAdmissionFormComponent } from './student-admission-form/student-admission-form.component';
import { SmsInfoComponent } from './sms-info/sms-info.component';
import { CurriculamComponent } from './curriculam/curriculam.component';



@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    RegistrationComponent,
    RegformComponent,
    AddressformComponent,
    OtpformComponent,
    UserloginComponent,
    VideosComponent,
    ClubsComponent,
    NotificationComponent,
    InstituteListComponent,
    InstituteChartComponent,
    DetailsInstituteComponent,
    AdmissionFormComponent,
    StudentAdmissionFormComponent,
    SmsInfoComponent,
    CurriculamComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class PagesModule { }
