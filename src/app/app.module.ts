import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';

import { GamesAppService } from './gamesppservice.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'gamesDashboard',
    component: GameDashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GameDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GamesAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
