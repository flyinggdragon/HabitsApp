export class Habit {
    name: string;
    time: string; // Mudar para tipo de dado adequado depois
    date: string; // Mudar para tipo de dado adequado depois
    place: string;
    periodic: boolean;

    constructor(name: string, time: string, date: string, place: string, periodic: boolean) {
        this.name = name;
        this.time = time;
        this.date = date;
        this.place = place;
        this.periodic = periodic;
    }
}