import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GamesAppService {

  serverUrl = "http://localhost:3000";

  constructor(private http: Http) { }

  // Get all data from the API
  getAllUsers(currentPage: number, pageSize: number) {
    //console.log(currentPage + ' ' + pageSize);
    var url = this.serverUrl + '/api/games/'+ currentPage + '/' + pageSize;
    return this.http.get(url)
      .map(res => res.json());
  }

    // Get all data from the API
    getUserGroupData(GroupBy: string, currentPage: number, pageSize: number) {
      console.log(GroupBy + ' ' + currentPage + ' ' + pageSize);
      var url = this.serverUrl + '/api/games/'+ GroupBy + '/' + currentPage + '/' + pageSize;
      return this.http.get(url)
        .map(res => res.json());
    }
}
