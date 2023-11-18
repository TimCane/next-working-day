import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Holiday } from 'src/app/models/holiday.interface';
import { getHolidays, setDay, setYear } from 'src/app/state/next-working-days/next-working-day.actions';
import { selectDates } from 'src/app/state/next-working-days/next-working-day.selectors';
import { selectHolidays } from '../../state/next-working-days/next-working-day.selectors';

@Component({
  selector: 'nwd-next-working-day',
  templateUrl: './next-working-day.component.html',
  styleUrls: ['./next-working-day.component.scss']
})
export class NextWorkingDayComponent implements OnInit {
  public selectDates$ = this.store.select(selectDates);
  public selectHolidays$ = this.store.select(selectHolidays);

  constructor(private store: Store) { }


  ngOnInit(): void {
    this.store.dispatch(getHolidays());
  }

  onDaySelected(day: number) {
    this.store.dispatch(setDay({ day: day }));
  }

  onYearSelected(year: number) {
    this.store.dispatch(setYear({ year }));
  }

  associatedHolidays(date: Date, holidays: Holiday[]) {
    var hols = [];

    for (let i = 0; i < holidays.length; i++) {
      const hol = holidays[i].date;

      if (hol.getUTCFullYear() == date.getUTCFullYear() && hol.getUTCMonth() == date.getUTCMonth()) {
        hols.push(holidays[i]);
      }
    }

    return hols;
  }
}
