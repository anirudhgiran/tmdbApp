import { Component, OnInit } from '@angular/core';
import { ChecksearchService } from '../checksearch.service';
import { Router } from '@angular/router'

//Services Import
import { DataServiceService } from "../data-service.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchText: string;
  results: any[];

  isActive: boolean = false;
  

  constructor(private _data: DataServiceService, private _check: ChecksearchService, private _router: Router) { }

  ngOnInit(): void {
    this._data.currentMessage.subscribe(message => this.searchText = message);
  }

  search() {
    if(this.searchText === "") this._check.isEmpty = true;
    else this._check.isEmpty = false;
    this._data.changeMessage(this.searchText);
    this._router.navigateByUrl("/search");
    this.isActive = false;
  }

  activateBurger(){
    this.isActive = !this.isActive;
  }
}
