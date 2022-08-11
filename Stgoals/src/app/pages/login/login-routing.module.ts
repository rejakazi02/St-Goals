import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
{
  path:"",
  component:LoginComponent
},
{
  path:"pagess",
    loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
