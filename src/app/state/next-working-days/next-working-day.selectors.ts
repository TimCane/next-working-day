import { NextWorkingDaysState } from "./next-working-day.reducers";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const nextWorkingDaysFeature =
  createFeatureSelector<NextWorkingDaysState>("nextWorkingDaysFeature");
const selector = <T>(mapping: (state: NextWorkingDaysState) => T) =>
  createSelector(nextWorkingDaysFeature, mapping);

export const selectDates = selector((state) => state.dates);
export const selectHolidays = selector((state) => state.holidays);
export const selectYear = selector((state) => state.year);
export const selectDay = selector((state) => state.day);