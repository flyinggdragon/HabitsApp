import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Habit } from '../../../classes/habit';

@Component({
    selector: 'all-habits-list',
    templateUrl: './all-habits-list.component.html',
    styleUrls: ['./all-habits-list.component.css']
})
export class AllHabitsListComponent {
    @Input() habits: Habit[] = [];
    @Output() deleteHabit = new EventEmitter<Habit>();
    @Output() editHabit = new EventEmitter<Habit>();

    public onDelete(habit: Habit): void {
        this.deleteHabit.emit(habit);
    }

    public onEdit(habit: Habit): void {
        this.editHabit.emit(habit);
    }
}