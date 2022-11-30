import { ProductDetailsComponent } from './product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  {
    path:"",
    component:ProductDetailsComponent,
    // canActivate: [AuthGuard],
    children:[

      {
        path:'',
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path:"home",
          loadChildren: () => import('../home/home.module').then(m => m.HomeModule)

      },
     
      
      {
        path:"videos",
          loadChildren: () => import('../videos/videos.module').then(m => m.VideosModule)

      },
      {
        path:"pages",
          loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)

      },
      {
        path:"clubs",
          loadChildren: () => import('../clubs/clubs.module').then(m => m.ClubsModule)

      },
      {
        path:"notification",
          loadChildren: () => import('../notification/notification.module').then(m => m.NotificationModule)

      },
      {
        path:"institutelist",
          loadChildren: () => import('../institute-list/institute-list.module').then(m => m.InstituteListModule)

      },
      // {
      //   path:"institute-chart",
      //     loadChildren: () => import('../institute-chart/institute-chart.module').then(m => m.InstituteChartModule)

      // },
      {
        path:"institute-chart",
          loadChildren: () => import('../institute-chart/institute-chart.module').then(m => m.InstituteChartModule)

      },
      // {
      //   path:"institute-chart/:id",
      //     loadChildren: () => import('../institute-chart/institute-chart.module').then(m => m.InstituteChartModule)

      // },
      {
        path:"details-institute",
          loadChildren: () => import('../details-institute/details-institute.module').then(m => m.DetailsInstituteModule)

      },
      // {
      //   path:"details-institute/:id",
      //     loadChildren: () => import('../details-institute/details-institute.module').then(m => m.DetailsInstituteModule)

      // },
      {
        path:"admission-form",
          loadChildren: () => import('../admission-form/admission-form.module').then(m => m.AdmissionFormModule)

      },
      {
        path:"student-admission-form",
          loadChildren: () => import('../student-admission-form/student-admission-form.module').then(m => m.StudentAdmissionFormModule)

      },
      {
        path:"sms-info",
          loadChildren: () => import('../sms-info/sms-info.module').then(m => m.SmsInfoModule)

      },
      {
        path:"curriculam",
          loadChildren: () => import('../curriculam/curriculam.module').then(m => m.CurriculamModule)

      },
      {
        path:"routine",
          loadChildren: () => import('../routine/routine.module').then(m => m.RoutineModule)

      },
      {
        path:"attendence",
          loadChildren: () => import('../attendence/attendence.module').then(m => m.AttendenceModule)

      },
      {
        path:"online-class",
          loadChildren: () => import('../online-class/online-class.module').then(m => m.OnlineClassModule)

      },
      {
        path:"online-exam",
          loadChildren: () => import('../online-exam/online-exam.module').then(m => m.OnlineExamModule)

      },
      {
        path:"exam-result",
          loadChildren: () => import('../exam-result/exam-result.module').then(m => m.ExamResultModule)

      },
      {
        path:"result-card",
          loadChildren: () => import('../result-card/result-card.module').then(m => m.ResultCardModule)

      },
      {
        path:"payment",
          loadChildren: () => import('../payment-type/payment-type.module').then(m => m.PaymentTypeModule)

      },
      {
        path:"card-section",
          loadChildren: () => import('../card-section/card-section.module').then(m => m.CardSectionModule)

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }
