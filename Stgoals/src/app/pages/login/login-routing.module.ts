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


},
{
  path:"registration",
    loadChildren: () => import('../registration/registration.module').then(m => m.RegistrationModule)

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
