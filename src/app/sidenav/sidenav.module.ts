
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { Popup1Component } from './popup1/popup1.component';



@NgModule({
  declarations: [
    SidenavComponent,
    Popup1Component,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidenavComponent,
  ]
})
export class SidenavModule { }
