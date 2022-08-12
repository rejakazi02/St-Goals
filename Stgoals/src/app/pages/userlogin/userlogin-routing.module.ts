import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin.component';
const routes: Routes = [
  {
    path:"",
    component:UserloginComponent
  },

  {
    path:"login",
      loadChildren: () => import('../login/login.module').then(m => m.LoginModule)

  },

  {
    path:"pages",
      loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)


  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserloginRoutingModule { }
