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
        this.habits = [
            new Habit('Exercício', '07:00', '2024-10-23', 'Academia', true),
            new Habit('Leitura', '20:00', '2024-10-23', 'Casa', false),
            new Habit('Meditação', '06:30', '2024-10-24', 'Quarto', true)
        ];
    }

    constructor() { }
}