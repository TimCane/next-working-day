import { Component, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/models/day.interface';
import { Holiday } from 'src/app/models/holiday.interface';
import { GetUTCTime } from 'src/app/utils/get-utc-time';

@Component({
  selector: 'nwd-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() date: Date | null;
  @Input() holidays: Holiday[];

  constructor() {
    this.date = null;
    this.holidays = [];
  }

  public monthDays: Day[] = [];

  public monthNumber!: number;
  public year!: number;

  public weekDaysName: string[] = [];

  ngOnInit(): void {
    this.setMonthDays(
      this.getMonth(this.date!.getMonth(), this.date!.getFullYear())
    );

    this.weekDaysName.push('Mo');
    this.weekDaysName.push('Tu');
    this.weekDaysName.push('We');
    this.weekDaysName.push('Th');
    this.weekDaysName.push('Fr');
    this.weekDaysName.push('Sa');
    this.weekDaysName.push('Su');
  }

  public getMonth(monthIndex: number, year: number): Day[] {
    let days = [];

    let firstday = this.createDay(1, monthIndex, year);

    //create empty days
    for (let i = 1; i < firstday.weekDayNumber; i++) {
      days.push({
        weekDayNumber: i,
        monthIndex: monthIndex,
        year: year,
      } as Day);
    }
    days.push(firstday);
    //

    let countDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    for (let i = 2; i < countDaysInMonth + 1; i++) {
      days.push(this.createDay(i, monthIndex, year));
    }

    return days;
  }

  public getMonthName(monthIndex: number): string {
    switch (monthIndex) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';

      default:
        return '|' + monthIndex;
    }
  }

  public getWeekDayName(weekDay: number): string {
    switch (weekDay) {
      case 1:
        return 'Mo'; // Monday
      case 2:
        return 'Tu'; // Tuesday
      case 3:
        return 'We'; // Wednesday
      case 4:
        return 'Th'; // Thursday
      case 5:
        return 'Fr'; // Friday
      case 6:
        return 'Sa'; // Saturday
      case 7:
        return 'Su'; // Sunday

      default:
        return '';
    }
  }

  private createDay(dayNumber: number, monthIndex: number, year: number) {
    let date = new Date(year, monthIndex, dayNumber);
    let weekDayNumber = date.getDay();

    if (weekDayNumber == 0) {
      weekDayNumber = 7;
    }

    var highlighted = GetUTCTime(date) == GetUTCTime(this.date);
    var holiday =
      this.holidays.find(
        (holiday) => GetUTCTime(holiday.date) == GetUTCTime(date)
      ) ?? null;

    let day: Day = {
      month: this.getMonthName(monthIndex),
      monthIndex,
      number: dayNumber,
      year,
      weekDayNumber,
      weekDayName: this.getWeekDayName(weekDayNumber),
      highlighted: highlighted,
      holiday: holiday,
    };

    return day;
  }

  //Math.floor( / 1000)

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }
}
