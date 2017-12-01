import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GamesAppService {

  constructor(private http: Http) { }

  // Get all data from the API
  getAllUsers(currentPage: number, pageSize: number) {
    //console.log(currentPage + ' ' + pageSize);
    var url = '/api/games/'+ currentPage + '/' + pageSize;
    return this.http.get(url)
      .map(res => res.json());
  }
}
