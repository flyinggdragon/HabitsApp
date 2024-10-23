import { Component, OnInit, Input } from '@angular/core';
import { Habit } from '../habit';

@Component({
  selector: 'habit-displayer',
  templateUrl: './habit-displayer.component.html',
  styleUrls: ['./habit-displayer.component.css']
})

export class HabitDisplayerComponent implements OnInit {
    @Input() habit!: Habit;

    ngOnInit() { }

    constructor() { }
}