import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegformComponent } from './regform.component';

const routes: Routes = [

  {
    path:"",
    component:RegformComponent
  },

  {
    path:"login",
      loadChildren: () => import('../login/login.module').then(m => m.LoginModule)

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegformRoutingModule { }
