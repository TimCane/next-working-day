import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setDay } from './state/next-working-days/next-working-day.actions';
import { selectDates } from './state/next-working-days/next-working-day.selectors';
import { NextWorkingDaysState } from './state/next-working-days/next-working-day.reducers';

@Component({
  selector: 'nwd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
