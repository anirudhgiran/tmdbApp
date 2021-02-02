import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  id: string;

  tvData: object;

  constructor(private _route: ActivatedRoute, private _search: SearchService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];

    this._search.getDetails("tv", this.id).subscribe(data => {
      this.tvData = data;
    });
  }

}
