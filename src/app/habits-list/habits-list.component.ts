import { Component, OnInit } from '@angular/core';
import { Habit } from '../classes/habit';

@Component({
    selector: 'habits-list',
    templateUrl: './habits-list.component.html',
    styleUrls: ['./habits-list.component.css']
})

export class HabitsListComponent implements OnInit {
    habits: Habit[] = [];
    selectedView: string = 'daily-habits'; // Valor padrão

    ngOnInit() {
        // Chamada para a API aqui. Carrega this.habits com o dados do BD.
        this.habits = [
            new Habit('Canoas Tattoo', new Date("October 19, 2024, 11:00:00"), 'ParkShopping Canoas', false, new Date("October 19, 2024, 17:00:00")),
            new Habit('Role com os amigos', new Date("November 02, 2024, 13:00:00"), 'Casa de Cultura Mario Quintana', true),
            new Habit('Show do Krisiun', new Date("November 23, 2024, 19:00:00"), 'Bar Opinião', false),
            new Habit('Festival do Japão', new Date("November 22, 2024, 10:00:00"), 'Parque de Exposições Assis Brasil', false)
        ];
    }

    constructor() {}

    public onDeleteHabit(habit: Habit) {
        // Outra chamada para a API aqui, para excluir hábitos do BD.
        this.habits = this.habits.filter(h => h !== habit);
    }
}