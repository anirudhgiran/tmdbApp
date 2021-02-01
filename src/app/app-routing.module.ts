import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Component Imports
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';
import { PersonComponent } from './person/person.component';

//Services Imports
import { ChecksearchService } from "./checksearch.service";

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"search", component:SearchComponent, canActivate: [ChecksearchService]},
  {path:"movie/:id", component: MovieComponent},
  {path:"tv/:id", component:TvComponent},
  {path:"person/:id", component:PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
