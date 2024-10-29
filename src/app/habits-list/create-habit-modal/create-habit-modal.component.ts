import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Habit } from '../../classes/habit';

@Component({
  selector: 'create-habit-modal',
  templateUrl: './create-habit-modal.component.html',
  styleUrls: ['./create-habit-modal.component.css']
})
export class CreateHabitModalComponent {
    habitName!: string;
    habitStartDate!: Date;
    habitPlace!: string;
    habitPeriodic!: boolean;
    habitEndDate!: Date;

    constructor(private dialogRef: MatDialogRef<CreateHabitModalComponent>) {}

    public createHabit(): void {
        const startDate = new Date(this.habitStartDate);
        const endDate = new Date(this.habitEndDate);

        const newHabit = new Habit(this.habitName, startDate, this.habitPlace, this.habitPeriodic, endDate);
        this.habitStartDate = startDate;
        this.habitEndDate = endDate;
        
        this.dialogRef.close(newHabit);
    }

    public closeModal(): void {
        this.dialogRef.close();
    }
}