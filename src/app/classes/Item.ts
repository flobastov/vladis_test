import {WeekStats} from './WeekStats';

export class Item {
    private readonly id: number;
    private readonly name: string;
    private readonly category: string;
    private readonly weekStats: WeekStats;
    private readonly balance: number;
    private readonly monthBalance: number;

    public constructor(id: number, name: string, category: string, weekStats: WeekStats, balance: number, monthBalance: number) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.weekStats = weekStats;
        this.balance = balance;
        this.monthBalance = monthBalance;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getCategory(): string {
        return this.category;
    }

    public getWeekStats(): WeekStats {
        return this.weekStats;
    }

    public getBalance(): number {
        return this.balance;
    }

    public getMonthBalance(): number {
        return this.monthBalance;
    }
}
