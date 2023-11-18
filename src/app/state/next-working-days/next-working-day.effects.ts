import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { catchError, from, map, of, switchMap, filter, withLatestFrom } from "rxjs";
import { calculateFailure, calculateSuccess, getHolidays, getHolidaysFailure, getHolidaysSuccess, setDay, setYear } from "./next-working-day.actions";
import { NextWorkingDayService } from "src/app/services/next-working-day.service";
import { HolidayService } from "src/app/services/holiday.service";
import { selectDay, selectHolidays, selectYear } from "./next-working-day.selectors";

@Injectable()
export class NextWorkingDaysEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private nextWorkingDayService: NextWorkingDayService,
        private holidayService: HolidayService
    ) { }

    calculateNextWorkingDay$ = createEffect(() =>
        this.actions$.pipe(
            ofType(setDay, setYear),
            withLatestFrom(
                this.store.select(selectDay),
                this.store.select(selectYear),
                this.store.select(selectHolidays)),
            filter(([ _, day, year, holidays]) => year != null && day != null),
            switchMap(([ _, day, year, holidays]) =>
                from(this.nextWorkingDayService.Calculate(day!, year!, holidays)).pipe(
                    map((dates) => calculateSuccess({ dates })),
                    catchError((error) => of(calculateFailure({ error })))
                )
            )
        )
    );

    getHolidays$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getHolidays),
            switchMap(() =>
                from(this.holidayService.GetHolidays()).pipe(
                    map((holidays) => getHolidaysSuccess({ holidays })),
                    catchError((error) => of(getHolidaysFailure({ error })))
                )
            )
        )
    )
}