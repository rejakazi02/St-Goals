
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
