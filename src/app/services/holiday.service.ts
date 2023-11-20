import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Holiday } from '../models/holiday.interface';

@Injectable({ providedIn: 'root' })
export class HolidayService {
  constructor(private http: HttpClient) {}

  GetHolidays(): Observable<Holiday[]> {
    return this.http.get('https://www.gov.uk/bank-holidays.json').pipe(
      map((val: any) => {
        var engAndWales = val['england-and-wales'];

        var holidays: Holiday[] = [];

        for (let i = 0; i < engAndWales.events.length; i++) {
          const element = engAndWales.events[i];

          holidays.push({
            name: element.title,
            date: new Date(element.date),
          });
        }

        return holidays;
      })
    );
  }
}
