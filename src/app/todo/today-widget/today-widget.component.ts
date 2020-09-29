import { Component, Input, OnInit } from '@angular/core';

import { getDayLabel, getMonthLabel } from '@shared/helpers/datetime';

@Component({
  selector: 'app-today-widget',
  templateUrl: './today-widget.component.html',
  styleUrls: ['./today-widget.component.scss'],
})
export class TodayWidgetComponent implements OnInit {
  dayLabel: string;
  monthLabel: string;
  date: number;

  constructor() { }

  ngOnInit(): void {
    this.buildViewModels();
  }

  private buildViewModels() {
    const today = new Date();
    this.date = today.getDate();
    this.dayLabel = getDayLabel(today.getDay());
    this.monthLabel = getMonthLabel(today.getMonth());
  }
}
