import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Habit } from '../../classes/habit';

@Component({
    selector: 'all-habits-list',
    templateUrl: './all-habits-list.component.html',
    styleUrls: ['./all-habits-list.component.css']
})
export class AllHabitsListComponent {
    @Input() habits: Habit[] = [];
    @Output() deleteHabit = new EventEmitter<Habit>();

    onDelete(habit: Habit) {
        this.deleteHabit.emit(habit);
    }
}