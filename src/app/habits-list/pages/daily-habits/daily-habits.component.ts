import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Habit } from '../../../classes/habit';

@Component({
    selector: 'daily-habits',
    templateUrl: './daily-habits.component.html',
    styleUrls: ['./daily-habits.component.css']
})

export class DailyHabitsComponent implements OnInit {
    today!: Date;
    currentDate!: Date;

    @Input() habits: Habit[] = [];
    @Output() deleteHabit = new EventEmitter<Habit>();
    @Output() editHabit = new EventEmitter<Habit>();

    ngOnInit(): void {
        this.today = new Date();
        this.currentDate = new Date(this.today);
    }

    constructor() {}

    public get todaysHabits(): Habit[] {
        return this.habits.filter(habit => this.isSameDate(habit.startDate, this.currentDate));
    }

    public dateToString(): string {
        return `${this.currentDate.getDate()}/${this.currentDate.getMonth() + 1}/${this.currentDate.getFullYear()}`;
    }

    public changeDay(forward: boolean): void {
        if (forward) {
            this.currentDate.setDate(this.currentDate.getDate() + 1);
        } else {
            this.currentDate.setDate(this.currentDate.getDate() - 1);
        }
    }

    private isSameDate(date1: Date, date2: Date): boolean {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    }

    public onDelete(habit: Habit): void {
        this.deleteHabit.emit(habit);
    }

    public onEdit(editedHabit: Habit): void {
        const index = this.habits.findIndex(habit => habit.name === editedHabit.name);
        if (index !== -1) {
            this.editHabit.emit(editedHabit);
        }
    }
}