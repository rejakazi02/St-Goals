import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';


@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    MatMenuModule
  ]
})
export class VideosModule { }
