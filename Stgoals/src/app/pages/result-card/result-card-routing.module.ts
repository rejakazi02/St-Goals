import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultCardComponent } from './result-card.component';

const routes: Routes = [
  {
    path:"",
    component:ResultCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultCardRoutingModule { }
