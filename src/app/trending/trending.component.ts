import { Component, OnInit, Input } from '@angular/core';

//Services Import
import { SearchService } from "../search.service";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  @Input() type: string;

  trendingData : object;
  results: any[];

  isPerson : boolean = false;
  isTv: boolean = false;
  isMovie:boolean = false;

  constructor(private _http: SearchService) { }

  ngOnInit(): void {
    this.getTrending();

    if(this.type === "person") this.isPerson = true;
    if(this.type === "movie") this.isMovie = true;
    if(this.type === "tv") this.isTv = true;
  }

  getTrending(){
    this._http.getTrending(this.type).subscribe(data=>{
      this.trendingData = data['results'];
    });
  }
}
