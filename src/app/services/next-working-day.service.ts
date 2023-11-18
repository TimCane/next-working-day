import { Injectable, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { getHolidays } from "../state/next-working-days/next-working-day.actions";
import { Holiday } from "../models/holiday.interface";
import { GetUTCTime } from "../utils/get-utc-time";

@Injectable()
export class NextWorkingDayService {

    constructor(private store: Store) { }


    Calculate(day: number, year: number, holidays: Holiday[]): Observable<Date[]> {

        var dates = [];
        for (let i = 0; i <= 11; i++) {
            var date = new Date(year, i, day);

            dates.push(this.NextWorkingDay(date, holidays));
        }

        return of(dates);
    }

    private NextWorkingDay(date: Date, holidays: Holiday[]): Date {

        var holiday = holidays.find((holiday) => GetUTCTime(holiday.date) == GetUTCTime(date));

        if (date.getDay() % 6 == 0 || holiday) {
            return this.NextWorkingDay(new Date(date.setDate(date.getDate() + 1)), holidays);
        } else {
            return date;
        }
    };

}