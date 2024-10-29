import { Component, EventEmitter, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateHabitModalComponent } from '../create-habit-modal/create-habit-modal.component';
import { Habit } from '../../classes/habit';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})

export class AddButtonComponent {
    text: string = "Adicionar Hábito";
    @Output() habitAdded: EventEmitter<Habit> = new EventEmitter<Habit>();

    constructor(private matDialog: MatDialog) {}

    public openDialogue(): void {
        const dialogRef = this.matDialog.open(CreateHabitModalComponent);

        dialogRef.afterClosed().subscribe((habit: Habit) => {
            if (habit) {
                this.habitAdded.emit(habit);
            }
        });
    }
}