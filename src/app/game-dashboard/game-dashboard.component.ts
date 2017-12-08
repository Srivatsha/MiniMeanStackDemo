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

  UserData = [];
  Columns = [];

  groupBySelected: boolean = false;
  groupByKey: string;

  constructor(private gamesService : GamesAppService){
    
  }

  ngOnInit() {

    this.loadGridData();
    
  }
  public SortData(event: any){
    console.log(event);
  }

  changePage(){
    if(!this.groupBySelected){
      this.loadGridData();
    }
    else{
      this.LoadGroupByGridData();
    }
      
  }

  loadGridData(){
    this.startRecord =  this.currentPage <= 1 ? 1 : (this.currentPage-1)*this.pageSize + 1;
    
    this.CurrPageRecords = (this.startRecord + this.pageSize) - 1;

    //console.log(this.startRecord + ' ' + this.pageSize + ' ' + this.CurrPageRecords);
    this.gamesService.getAllUsers(this.currentPage, this.pageSize).subscribe(gameData => {
      
      this.totalRecords = gameData.TotalRows;
      this.UserData = gameData.gamesdata;
      console.log(this.UserData);
    
      this.Columns = [];
      for(var k in this.UserData[0]) {
        if(k != '_id')
          this.Columns.push(k);
      }
      this.groupBySelected = false;
      console.log(this.Columns);
    });
  }

  LoadGroupByGridData(){
    
    if(this.groupByKey == '') this.groupByKey = 'UserName';
    this.gamesService.getUserGroupData(this.groupByKey, this.currentPage, this.pageSize).subscribe(gameData => {
      
      this.totalRecords = gameData.TotalRows;
      this.UserData = gameData.gamesdata;
      console.log(this.UserData);
    
      this.Columns = [];
      for(var k in this.UserData[0]) {
        if(k != '_id')
          this.Columns.push(k);
      }
      this.groupBySelected = true;
      //console.log(this.Columns);
    });
  }

  setGroupBy(groupbyKey: string){
    this.groupByKey = groupbyKey;
   
  }

  resetGridData(){
    this.groupByKey = '';
    //this.groupBySelected = false;
    this.currentPage = 1;
    this.pageSize = 15;
    this.loadGridData();
  }
}
