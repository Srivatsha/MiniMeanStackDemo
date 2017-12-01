import { Component, OnInit } from '@angular/core';

import { Column, Columns } from '../common/Constants'; 
import { GamesAppService } from '../gamesppservice.service';

@Component({
  selector: 'dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboardComponent implements OnInit {
  constants : Column[] =  Columns;
  gameData: Column[];
  currentPage: number = 1;
  pageSize: number = 15;
  totalRecords: number;
  startRecord: number;
  CurrPageRecords : number;
  constructor(private gamesService : GamesAppService){
    
  }

  ngOnInit() {

    this.loadGridData();
    
  }
  public SortData(event: any){
    console.log(event);
  }

  changePage(){
    this.loadGridData();
  }

  loadGridData(){
    this.startRecord =  this.currentPage <= 1 ? 1 : (this.currentPage-1)*this.pageSize + 1;
    
    this.CurrPageRecords = (this.startRecord + this.pageSize) - 1;

    console.log(this.startRecord + ' ' + this.pageSize + ' ' + this.CurrPageRecords);
    this.gamesService.getAllUsers(this.currentPage, this.pageSize).subscribe(gameData => {
      console.log(gameData);
      this.totalRecords = gameData.TotalRows;
      this.gameData = gameData.gamesdata;
    });
    
  }
}
