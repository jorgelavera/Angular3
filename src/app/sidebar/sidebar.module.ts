import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SidebarModule { }
