import { Component, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { WeekStats } from '../classes/WeekStats';
import { Item } from '../classes/Item';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() private categories: string[];
  @Input() private items: Item[];
  @Output() public onItemSelected = new EventEmitter<any>();
  @Output() public onCategorySelected = new EventEmitter<any>();

  private entries: string[];
  private entry: string;
  private total: number;
  private month: number;
  private totalWeekStats: WeekStats = new WeekStats();
  private dataChart: GoogleChartInterface = {
    chartType: 'LineChart'
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items.currentValue !== changes.items.previousValue) {
      const items = changes.items.currentValue;
      const arrWeekStats: WeekStats[] = [];
      this.entries = [];
      this.entry = 'Все вхождения';
      this.entries.push(this.entry);
      this.total = 0;
      this.month = 0;
      for (const item of items) {
            this.entries.push(item.getName());
            this.total += item.getBalance();
            this.month += item.getMonthBalance();
            arrWeekStats.push(item.getWeekStats());
      }
      this.totalWeekStats = this.getTotalWeekStats(arrWeekStats);
      this.dataChart = {
        chartType: 'LineChart',
        dataTable: [
            ['Day', 'Stats'],
            ['M', this.totalWeekStats.getMonday()],
            ['T', this.totalWeekStats.getTuesday()],
            ['W', this.totalWeekStats.getWednesday()],
            ['T', this.totalWeekStats.getThursday()],
            ['F', this.totalWeekStats.getFriday()],
            ['S', this.totalWeekStats.getSaturday()],
            ['S', this.totalWeekStats.getSunday()]
        ],
        options: {
          curveType: 'function',
          legend: 'none'
        }
      };
    }
  }

  private onChangeCategory(categoryName: string) {
    this.onCategorySelected.emit(categoryName);
  }

  private onChangeEntry(entry: string) {
    this.entry = entry;
  }

  private getTotalWeekStats(arr: WeekStats[]): WeekStats {
    let monday = 0, tuesday = 0, wednesday = 0, thursday = 0, friday = 0, saturday = 0, sunday = 0;
    for (const item of arr) {
        monday += item.getMonday();
        tuesday += item.getTuesday();
        wednesday += item.getWednesday();
        thursday += item.getThursday();
        friday += item.getFriday();
        saturday += item.getSaturday();
        sunday += item.getSunday();
    }
    return new WeekStats(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
  }

  private onClick(value: string) {
    this.onItemSelected.emit(value);
  }
}
