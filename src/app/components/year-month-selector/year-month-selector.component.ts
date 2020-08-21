import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-year-month-selector',
  templateUrl: './year-month-selector.component.html',
  styleUrls: ['./year-month-selector.component.sass']
})
export class YearMonthSelectorComponent implements OnInit {
  @Input() monthInput: FormControl;
  @Input() yearInput: FormControl;
  selectedMonth = null;
  selectedYear = null;
  years = new Array<object>(12).fill(null).map((_, index) => 2020 + index);
  months = new Array<object>(12).fill(null).map((_, index) => index + 1);

  constructor() { }

  ngOnInit(): void {
    this.selectedMonth = this.monthInput.value;
    this.selectedYear = this.yearInput.value;
  }

  onChangeMonth(month) {
    this.monthInput.setValue(month);
  }

  onChangeYear(year) {
    this.yearInput.setValue(year);
  }

}
