import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  id: string;

  personData: object;

  constructor(private _route: ActivatedRoute, private _search: SearchService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];

    this._search.getDetails("person", this.id).subscribe(data => {
      this.personData = data;
    });
  }
}

