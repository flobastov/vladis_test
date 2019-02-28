import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { WeekStats } from '../classes/WeekStats';
import { Item } from '../classes/Item';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  private categories: string[];
  private companies: Item[];
  private items: Item[];

  constructor( private appService: AppService ) {}

  ngOnInit(): void {
    this.appService.getCompanies().pipe(
        map(res => {
            return res.companies.filter(company => company.monthRevenue > 0);
        })
    ).subscribe( companies => {
        this.companies = this.convertData(companies);
        this.categories = this.getCategories(this.companies);
        this.items = this.companies;
    });
  }

  private convertData(companies: any) {
      const result: Item[] = [];
      companies.forEach(company => {
          const revenuePerWeek = company.revenuePerWeek;
          const weekStats = new WeekStats(revenuePerWeek.monday, revenuePerWeek.tuesday, revenuePerWeek.wednesday, revenuePerWeek.thursday,
              revenuePerWeek.friday, revenuePerWeek.saturday, revenuePerWeek.sunday);
          const item = new Item(company.id, company.name, company.type, weekStats, company.revenue, company.monthRevenue);
          result.push(item);
      });
      return result;
  }

  private getCategories(companies: Item[]) {
      const set = new Set<string>();
      set.add('Все категории');
      companies.forEach(company => {
          set.add(company.getCategory());
      });
      return Array.from(set);
  }

  private onCategorySelected(category: string) {
    if (category === this.categories[0]) {
        this.items = this.companies;
    } else {
        this.items = this.companies.filter(company => {
          return company.getCategory() === category;
        });
    }
  }

  private onItemSelected(companyName: string) {
    let itemId: number;
    for (const item of this.items) {
        if (item.getName() === companyName) {
            itemId = item.getId();
            break;
        }
    }
    console.log(itemId);
  }
}
