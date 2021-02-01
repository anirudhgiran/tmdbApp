import { Component, OnInit } from '@angular/core';

//Services Import
import { DataServiceService } from '../data-service.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string = "";

  type_movie: string = "movie";
  type_tv: string = "tv";

  isMovie:boolean = true;
  isTv:boolean = false;

  constructor(private _data: DataServiceService, private _http: SearchService) { }

  ngOnInit(): void {
    this._data.currentMessage.subscribe(message => this.searchText = message);
  }

  

  showMovie(){
    this.isMovie = true;
    this.isTv = false;
  }

  showTv(){
    this.isTv = true;
    this.isMovie = false;
  }
}
