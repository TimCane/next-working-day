import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NextWorkingDayService } from 'src/app/services/next-working-day.service';
import { NextWorkingDaysEffects } from 'src/app/state/next-working-days/next-working-day.effects';
import { nextWorkingDaysReducer } from 'src/app/state/next-working-days/next-working-day.reducers';
import { CalendarModule } from '../../components/calendar/calendar.module';
import { DaySelectorModule } from '../../components/day-selector/day-selector.module';
import { YearSelectorModule } from '../../components/year-selector/year-selector.module';
import { NextWorkingDayComponent } from './next-working-day.component';

@NgModule({
  declarations: [NextWorkingDayComponent],
  imports: [
    CommonModule,
    DaySelectorModule,
    YearSelectorModule,
    CalendarModule,
    StoreModule.forFeature('nextWorkingDaysFeature', nextWorkingDaysReducer),
    EffectsModule.forFeature([NextWorkingDaysEffects]),
  ],
  providers: [NextWorkingDayService],
  exports: [NextWorkingDayComponent],
})
export class NextWorkingDayModule {}
