import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  type_movie: string = "movie";
  type_tv: string = "tv";
  type_person:string = "person";

  constructor() { }

  ngOnInit(): void {
  }

}
