import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Habit } from '../../classes/habit';

@Component({
  selector: 'edit-habit-modal',
  templateUrl: './edit-habit-modal.component.html',
  styleUrls: ['./edit-habit-modal.component.css']
})

export class EditHabitModalComponent {
    habitName!: string;
    habitStartDate!: Date;
    habitPlace!: string;
    habitPeriodic!: boolean;
    habitEndDate!: Date;

    constructor(
        private dialogRef: MatDialogRef<EditHabitModalComponent>,
        @Inject(MAT_DIALOG_DATA) public habit: Habit
    ) {}

    ngOnInit(): void {
        this.habitName = this.habit.name;
        this.habitStartDate = this.habit.startDate;
        this.habitPlace = this.habit.place;
        this.habitPeriodic = this.habit.periodic;
        this.habitEndDate = this.habit.endDate ?? new Date();
    }

    public editHabit(): void {
        const updatedHabit = new Habit(this.habitName, this.habitStartDate, this.habitPlace, this.habitPeriodic, this.habitEndDate, this.habit.id);
        this.dialogRef.close(updatedHabit);
    }

    public closeModal(): void {
        this.dialogRef.close();
    }
}