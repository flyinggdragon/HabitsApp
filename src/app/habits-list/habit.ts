export class Habit {
    name: string;
    startTime: string;
    startDate: string;
    place: string;
    periodic: boolean;
    endTime?:string;
    endDate?:string;

    constructor(name: string, startTime: string, startDate: string, place: string, periodic: boolean, endTime?: string, endDate?: string) {
        this.name = name;
        this.startTime = startTime;
        this.startDate = startDate;
        this.place = place,
        this.periodic = periodic;
        this.endTime = endTime;
        this.endDate = endDate;
    }
}