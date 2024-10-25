export class Habit {
    constructor(
        public name: string,
        public startDate: Date,
        public place: string,
        public periodic: boolean,
        public endDate?: Date
    ) {}
}