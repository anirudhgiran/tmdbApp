import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  @Input() type: string;
  @Input() searchText: string;

  results:any[];

  isMovie:boolean = false;
  isTv:boolean = false;

  constructor(private _http: SearchService) { }

  ngOnInit(): void {
    if(this.type === "movie") this.isMovie = true;
    else this.isTv = true;
    this.searchData();
  }

  searchData(){
    this._http.getData(this.type, this.searchText, 1, false).subscribe(data => {
      this.results = data['results'];
    });
  }
}
