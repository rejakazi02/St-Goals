import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpformComponent } from './otpform.component';
const routes: Routes = [
  {
    path:"",
    component:OtpformComponent
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtpformRoutingModule { }
