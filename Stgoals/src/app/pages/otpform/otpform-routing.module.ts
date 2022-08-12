import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpformComponent } from './otpform.component';
const routes: Routes = [
  {
    path:"",
    component:OtpformComponent
  },

  {
    path:"login",
      loadChildren: () => import('../login/login.module').then(m => m.LoginModule)

  },
  {
    path:"userlogin",
      loadChildren: () => import('../userlogin/userlogin.module').then(m => m.UserloginModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtpformRoutingModule { }