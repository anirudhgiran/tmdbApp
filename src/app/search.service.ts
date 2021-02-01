import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private API_KEY = 'd1f277d3b660ae1c340c74177d2bc629';

  constructor(private _http: HttpClient) { }

  getData(type: string, query: string, page: number, isAdult: boolean) {
    return this._http.get(`https://api.themoviedb.org/3/search/${type}?api_key=${this.API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=${isAdult}`);
  }

  getDetails(type: string, id: string) {
    return this._http.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${this.API_KEY}&language=en-US`);
  }

  getTrending(type: string){
    return this._http.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${this.API_KEY}`);
  }
}

