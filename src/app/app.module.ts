import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitsListComponent } from './habits-list/habits-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HabitDisplayerComponent } from './habits-list/habit-displayer/habit-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitsListComponent,
    HomeComponent,
    NotFoundComponent,
    HabitDisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
