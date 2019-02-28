export class WeekStats {
    private readonly monday: number;
    private readonly tuesday: number;
    private readonly wednesday: number;
    private readonly thursday: number;
    private readonly friday: number;
    private readonly saturday: number;
    private readonly sunday: number;

    public constructor(monday = 0, tuesday = 0, wednesday = 0, thursday = 0, friday = 0, saturday = 0, sunday = 0) {
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
    }

    public getMonday(): number {
        return this.monday;
    }

    public getTuesday(): number {
        return this.tuesday;
    }

    public getWednesday(): number {
        return this.wednesday;
    }

    public getThursday(): number {
        return this.thursday;
    }

    public getFriday(): number {
        return this.friday;
    }

    public getSaturday(): number {
        return this.saturday;
    }

    public getSunday(): number {
        return this.sunday;
    }

}
