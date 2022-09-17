import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardSectionComponent } from './card-section.component';

const routes: Routes = [
  {
    path:"",
    component:CardSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardSectionRoutingModule { }
