import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class AppService {
    /*generate data*/
    res: any = { companies: [
        {
            id: 6,
            name: 'Tesla',
            type: 'Motors',
            revenuePerWeek: {
                monday: 12,
                tuesday: 5,
                wednesday: 34,
                thursday: 15,
                friday: 10,
                saturday: 21,
                sunday: 20,
            },
            revenue: 1500,
            monthRevenue: 345
        },
        {
            id: 7,
            name: 'AMD',
            type: 'Crystal',
            revenuePerWeek: {
                monday: 9,
                tuesday: 11,
                wednesday: 45,
                thursday: 23,
                friday: 13,
                saturday: 14,
                sunday: 12,
            },
            revenue: 1000,
            monthRevenue: 233
        }
    ]};

    getCompanies(): Observable<any> {
        return of(this.res);
    }
}
