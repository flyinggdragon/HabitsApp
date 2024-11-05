import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EditHabitModalComponent } from '../edit-habit-modal/edit-habit-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Habit } from '../../classes/habit';

@Component({
    selector: 'habit-displayer',
    templateUrl: './habit-displayer.component.html',
    styleUrls: ['./habit-displayer.component.css']
})

export class HabitDisplayerComponent {
    @Input() habit!: Habit;
    @Output() deleteHabit = new EventEmitter<Habit>();
    @Output() editHabit = new EventEmitter<Habit>();

    constructor(private dialog: MatDialog) {}

    public onEdit(): void {
        const dialogRef = this.dialog.open(EditHabitModalComponent, {
            width: '400px',
            data: this.habit
        });
    
        dialogRef.afterClosed().subscribe((updatedHabit: Habit) => {
            if (updatedHabit) {
                this.editHabit.emit(updatedHabit);
            }
        });
    }

    onDelete(): void {
        this.deleteHabit.emit(this.habit);
    }
}