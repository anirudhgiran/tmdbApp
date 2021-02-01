import { Injectable } from '@angular/core';

import { CanActivate,Router,RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ChecksearchService implements CanActivate {

  isEmpty:boolean = true;

  constructor( private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.isEmpty){
      this._router.navigate(['']);
      return false;
    }else{
      return true;
    }
  }
}
