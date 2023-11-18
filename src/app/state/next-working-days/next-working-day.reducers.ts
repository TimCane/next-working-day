import { createReducer, on } from "@ngrx/store"
import { calculateFailure, calculateSuccess, getHolidaysFailure, getHolidaysSuccess, setDay, setYear } from "./next-working-day.actions"
import { Holiday } from "src/app/models/holiday.interface";

export interface NextWorkingDaysState {
    day: number | null;
    dates: Date[];
    error: string | null;
    holidays: Holiday[];
    year: number | null;
}

export const initialState: NextWorkingDaysState = {
    day: null,
    dates: [],
    error: null,
    holidays: [],
    year: null
}


export const nextWorkingDaysReducer = createReducer(
    initialState,
    on(setYear, (state, {year}) => ({
        ...state,
        year
    })),
    on(setDay, (state, { day }) => ({
        ...state,
        day,
        error: null,
    })),

    on(calculateSuccess, (state, {dates}) => ({
        ...state,
        dates,
        error: null,
    })),

    on(calculateFailure, (state, {error}) => ({
        ...state,
        day: null,
        error,
        dates: []
    })),


    on(getHolidaysSuccess, (state, {holidays}) => ({
        ...state,
        holidays
    })),

    on(getHolidaysFailure, (state, {error}) => ({
        ...state,
        holidays: [],
        error
    }))
);