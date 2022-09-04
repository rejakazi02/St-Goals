import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsInfoComponent } from './sms-info.component';

const routes: Routes = [
  {
    path:"",
    component:SmsInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class SmsInfoRoutingModule { }
