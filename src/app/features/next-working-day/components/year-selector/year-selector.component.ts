import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nwd-year-selector',
  templateUrl: './year-selector.component.html',
  styleUrls: ['./year-selector.component.scss']
})
export class YearSelectorComponent implements OnInit {
  selectedYear: number | null;
  years: number[];

  @Output() onSelect: EventEmitter<number>;

  constructor() { 
    this.selectedYear = new Date().getFullYear();
    this.onSelect = new EventEmitter<number>();
    this.years = [];
  }

  ngOnInit() {
    for (let i = 2018; i <= 2025; i++) {
      this.years.push(i);      
    }

    this.onChange();
  }

  onChange(){
    if(this.selectedYear){
      this.onSelect.emit(this.selectedYear);
    }
  }
}
