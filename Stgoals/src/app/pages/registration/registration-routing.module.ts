import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path:"",
    component:RegistrationComponent
  },
  {
    path:"login",
      loadChildren: () => import('../login/login.module').then(m => m.LoginModule)

  },
  {
    path:"regform",
    loadChildren: () => import('../regform/regform.module').then(m => m.RegformModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
