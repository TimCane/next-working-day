import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaySelectorComponent } from './day-selector.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DaySelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DaySelectorComponent
  ]
})
export class DaySelectorModule { }
