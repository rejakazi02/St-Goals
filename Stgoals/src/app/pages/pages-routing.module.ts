import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
      {
        path:'',
        redirectTo:"login",
        pathMatch:"full"
      },
      {
        path:"",
        component:HomeComponent,
        canActivate: [AuthGuard],
        children:[


          {
            path:"home",
              loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    
          },
         
          
          {
            path:"videos",
              loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule)
    
          },
          {
            path:"pages",
              loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    
          },
          {
            path:"clubs",
              loadChildren: () => import('./clubs/clubs.module').then(m => m.ClubsModule)
    
          },
          {
            path:"notification",
              loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)
    
          },
          {
            path:"institutelist",
              loadChildren: () => import('./institute-list/institute-list.module').then(m => m.InstituteListModule)
    
          },
          {
            path:"institute-chart",
              loadChildren: () => import('./institute-chart/institute-chart.module').then(m => m.InstituteChartModule)
    
          },
          {
            path:"details-institute",
              loadChildren: () => import('./details-institute/details-institute.module').then(m => m.DetailsInstituteModule)
    
          },
          {
            path:"admission-form",
              loadChildren: () => import('./admission-form/admission-form.module').then(m => m.AdmissionFormModule)
    
          },
          {
            path:"student-admission-form",
              loadChildren: () => import('./student-admission-form/student-admission-form.module').then(m => m.StudentAdmissionFormModule)
    
          },
          {
            path:"sms-info",
              loadChildren: () => import('./sms-info/sms-info.module').then(m => m.SmsInfoModule)
    
          },
          {
            path:"curriculam",
              loadChildren: () => import('./curriculam/curriculam.module').then(m => m.CurriculamModule)
    
          },
          {
            path:"routine",
              loadChildren: () => import('./routine/routine.module').then(m => m.RoutineModule)
    
          },
          {
            path:"attendence",
              loadChildren: () => import('./attendence/attendence.module').then(m => m.AttendenceModule)
    
          },
          {
            path:"online-class",
              loadChildren: () => import('./online-class/online-class.module').then(m => m.OnlineClassModule)
    
          },
          {
            path:"online-exam",
              loadChildren: () => import('./online-exam/online-exam.module').then(m => m.OnlineExamModule)
    
          },
          {
            path:"exam-result",
              loadChildren: () => import('./exam-result/exam-result.module').then(m => m.ExamResultModule)
    
          },
          {
            path:"result-card",
              loadChildren: () => import('./result-card/result-card.module').then(m => m.ResultCardModule)
    
          },
          {
            path:"card-section",
              loadChildren: () => import('./card-section/card-section.module').then(m => m.CardSectionModule)
    
          }
        ]
      },
      {
        path:"product-details",
        loadChildren: () => import ('./product-details/product-details.module').then(m => m.ProductDetailsModule)

      },
      {
        path:"otpform",
          loadChildren: () => import('./otpform/otpform.module').then(m => m.OtpformModule)

      },
      {
        path:"addressform",
          loadChildren: () => import('./addressform/addressform.module').then(m => m.AddressformModule)

      },
      {
        path:"login",
        loadChildren: () => import ('./login/login.module').then(m => m.LoginModule)
      },
      {
        path:"userlogin",
          loadChildren: () => import('./userlogin/userlogin.module').then(m => m.UserloginModule)


      },
      {
        path:"registration",
          loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)


      },
      {
        path:"regform",
          loadChildren: () => import('./regform/regform.module').then(m => m.RegformModule)

      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
