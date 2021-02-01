import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { FooterComponent } from './footer/footer.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    TrendingComponent,
    FooterComponent,
    SearchresultComponent,
    MovieComponent,
    TvComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }