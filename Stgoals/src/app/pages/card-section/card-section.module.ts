import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardSectionRoutingModule } from './card-section-routing.module';
import { CardSectionComponent } from './card-section.component';


@NgModule({
  declarations: [CardSectionComponent],
  imports: [
    CommonModule,
    CardSectionRoutingModule
  ]
})
export class CardSectionModule { }
