import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitsListComponent } from './habits-list/habits-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HabitDisplayerComponent } from './habits-list/habit-displayer/habit-displayer.component';
import { AllHabitsListComponent } from './habits-list/all-habits-list/all-habits-list.component';
import { DailyHabitsComponent } from './habits-list/daily-habits/daily-habits.component';
import { HabitScheduleComponent } from './habits-list/habit-schedule/habit-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitsListComponent,
    HomeComponent,
    NotFoundComponent,
    HabitDisplayerComponent,
    AllHabitsListComponent,
    DailyHabitsComponent,
    HabitScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
        {
            path: '',
            component: NotFoundComponent
        },
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'habits-list',
            component: HabitsListComponent
        },
        {
            path: '**',
            component: NotFoundComponent
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
