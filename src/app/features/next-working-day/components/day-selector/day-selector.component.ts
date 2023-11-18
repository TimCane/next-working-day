import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nwd-day-selector',
  templateUrl: './day-selector.component.html',
  styleUrls: ['./day-selector.component.scss']
})
export class DaySelectorComponent implements OnInit {
  selectedDay: number | null;
  days: number[];

  @Output() onSelect: EventEmitter<number>;

  constructor() { 
    this.selectedDay = 6;
    this.onSelect = new EventEmitter<number>();
    this.days = [];
  }

  ngOnInit() {
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);      
    }


    this.onChange();
  }

  onChange(){
    if(this.selectedDay){
      this.onSelect.emit(this.selectedDay);
    }
  }

}
