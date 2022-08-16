import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';

import { VideosRoutingModule } from './videos-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VideosRoutingModule,
    MatMenuModule
  ]
})
export class VideosModule { }
