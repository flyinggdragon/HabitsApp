import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Habit } from '../../classes/habit';

@Component({
    selector: 'habit-displayer',
    templateUrl: './habit-displayer.component.html',
    styleUrls: ['./habit-displayer.component.css']
})

export class HabitDisplayerComponent implements OnInit {
    @Input() habit!: Habit;
    @Output() deleteHabit = new EventEmitter<Habit>();

    ngOnInit() {}

    onDelete() {
        this.deleteHabit.emit(this.habit);
    }
}