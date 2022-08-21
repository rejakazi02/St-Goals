import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './../../material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports:[
    HeaderComponent,
    MaterialModule,

  ]
})
export class HeaderModule { }
