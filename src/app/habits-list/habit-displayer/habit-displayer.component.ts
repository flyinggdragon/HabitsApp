import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Habit } from '../../classes/habit';

@Component({
    selector: 'habit-displayer',
    templateUrl: './habit-displayer.component.html',
    styleUrls: ['./habit-displayer.component.css']
})

export class HabitDisplayerComponent {
    @Input() habit!: Habit;
    @Output() deleteHabit = new EventEmitter<Habit>();

    onDelete(): void {
        this.deleteHabit.emit(this.habit);
    }
}