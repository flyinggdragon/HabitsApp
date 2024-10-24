import { Component, OnInit } from '@angular/core';
import { Habit } from './habit';

@Component({
    selector: 'habits-list',
    templateUrl: './habits-list.component.html',
    styleUrls: ['./habits-list.component.css']
})

export class HabitsListComponent implements OnInit {
    habits: Habit[] = [];

    ngOnInit() {
        // Chamada para a API vai aqui, para carregar this.habits com os habits.
        this.habits = [
            new Habit('Canoas Tattoo', '11:00', '2024-10-21', 'ParkShopping Canoas', false),
            new Habit('Role com os amigos', '13:00', '2024-11-02', 'Casa de Cultura Mario Quintana', true),
            new Habit('Show do Krisiun', '19:00', '2024-11-22', 'Bar Opinião', false),
            new Habit('Festival do Japão', '10:00', '2024-11-22', 'Parque de Exposições Assis Brasil', false)
        ];
    }

    constructor() { }

    public onDeleteHabit(habit: Habit) {
        this.habits = this.habits.filter(h => h !== habit);
    }
}