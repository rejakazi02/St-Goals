import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressformComponent } from './addressform.component';

const routes: Routes = [


    {
      path:"",
      component:AddressformComponent
    },

    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressformRoutingModule { }
