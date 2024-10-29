import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitsListComponent } from './habits-list/habits-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HabitDisplayerComponent } from './habits-list/habit-displayer/habit-displayer.component';
import { AllHabitsListComponent } from './habits-list/pages/all-habits-list/all-habits-list.component';
import { DailyHabitsComponent } from './habits-list/pages/daily-habits/daily-habits.component';
import { LoggedHomeComponent } from './logged-home/logged-home.component';
import { AddButtonComponent } from './habits-list/add-button/add-button.component';
import { CreateHabitModalComponent } from './habits-list/create-habit-modal/create-habit-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HabitsListComponent,
    HomeComponent,
    NotFoundComponent,
    HabitDisplayerComponent,
    AllHabitsListComponent,
    DailyHabitsComponent,
    LoggedHomeComponent,
    AddButtonComponent,
    CreateHabitModalComponent,
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
    ]),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
