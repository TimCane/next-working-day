import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextWorkingDayComponent } from './next-working-day.component';
import { nextWorkingDaysReducer } from 'src/app/state/next-working-days/next-working-day.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NextWorkingDaysEffects } from 'src/app/state/next-working-days/next-working-day.effects';
import { DaySelectorModule } from 'src/app/features/next-working-day/components/day-selector/day-selector.module';
import { CalendarModule } from './components/calendar/calendar.module';
import { NextWorkingDayService } from 'src/app/services/next-working-day.service';
import { YearSelectorModule } from './components/year-selector/year-selector.module';



@NgModule({
  declarations: [
    NextWorkingDayComponent
  ],
  imports: [
    CommonModule,
    DaySelectorModule,
    YearSelectorModule,
    CalendarModule,
    StoreModule.forFeature("nextWorkingDaysFeature", nextWorkingDaysReducer),
    EffectsModule.forFeature([NextWorkingDaysEffects]),
  ],
  providers: [
    NextWorkingDayService
  ],
  exports: [
    NextWorkingDayComponent
  ]
})
export class NextWorkingDayModule { }
