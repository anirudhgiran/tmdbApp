import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  id: string;

  movieData: object;

  hours:number;
  minutes:number;

  runtime:number;

  constructor(private _route: ActivatedRoute, private _search: SearchService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];

    this._search.getDetails("movie", this.id).subscribe(data=>{
      this.movieData = data;
    });
  }
}
