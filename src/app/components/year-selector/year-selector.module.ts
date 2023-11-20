import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearSelectorComponent } from './year-selector.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    YearSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    YearSelectorComponent
  ]
})
export class YearSelectorModule { }
