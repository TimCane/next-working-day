import { createAction, props } from "@ngrx/store";
import { Holiday } from "src/app/models/holiday.interface";

export const setYear = createAction(
    "[Next Working Day Page] Set Year",
    props<{year: number}>()
)

export const setDay = createAction(
    "[Next Working Day Page] Set Day",
    props<{ day: number }>()
)

export const calculateSuccess = createAction(
    "[Next Working Day Api] Calculate Success",
    props<{ dates: Date[] }>()
)

export const calculateFailure = createAction(
    "[Next Working Day Api] Calculate Failure",
    props<{ error: string }>()
)


export const getHolidays = createAction(
    "[Next Working Day Page] Get Holidays"
)

export const getHolidaysSuccess = createAction(
    "[Next Working Day Api] Get Holidays Success",
    props<{ holidays: Holiday[] }>()
)

export const getHolidaysFailure = createAction(
    "[Next Working Day Api] Get Holidays Failure",
    props<{ error: string }>()
)