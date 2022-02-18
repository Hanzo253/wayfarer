import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CitiesComponent } from './cities/cities.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CitiesDirective } from './cities.directive';
import { DescriptionComponent } from './description/description.component';
import { CityComponent } from './city/city.component';
import { SearchBarComponent } from './nav-bar/search-bar/search-bar.component';
// import { SearchService } from './nav-bar/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    CitiesComponent,
    NavBarComponent,
    CitiesDirective,
    DescriptionComponent,
    CityComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [], //<---don't forget to add the SearchService back
  bootstrap: [AppComponent]
})
export class AppModule { }
