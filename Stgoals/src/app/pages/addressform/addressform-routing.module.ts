import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressformComponent } from './addressform.component';

const routes: Routes = [


    {
      path:"",
      component:AddressformComponent
    },

    {
      path:"login",
        loadChildren: () => import('../login/login.module').then(m => m.LoginModule)

    },
    {
      path:"otpform",
        loadChildren: () => import('../otpform/otpform.module').then(m => m.OtpformModule)

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressformRoutingModule { }
