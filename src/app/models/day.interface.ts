import { Holiday } from './holiday.interface';

export interface Day {
  number: number;
  year: number;

  month: string;
  monthIndex: number;

  weekDayName: string;
  weekDayNumber: number;

  highlighted: boolean;
  holiday: Holiday | null;
}
