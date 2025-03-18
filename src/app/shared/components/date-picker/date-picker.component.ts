import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MONTHS_ARRAY, MonthsEnum } from 'src/app/core/constants';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  standalone: false
})
export class DatePickerComponent implements OnInit {

  @Output() dateSelected = new EventEmitter<Date>();

  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months = MONTHS_ARRAY;
  years: number[] = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  day!: number;
  month!: number;
  year!: number;

  @Input() initialDate!: Date;
  selectedDay!: number;
  selectedMonth!: MonthsEnum;
  selectedYear!: number;

  ngOnInit() {
    const date = this.initialDate ? new Date(this.initialDate) : new Date();
    this.day = date.getDate();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
  }

  updateDate() {
    if (this.day && this.month && this.year) {
      const selectedDate = new Date(this.year, this.month - 1, this.day);
      this.dateSelected.emit(selectedDate);
    }
  }

}
