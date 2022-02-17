import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CitiesComponent } from './cities/cities.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
<<<<<<< HEAD
import { PostComponent } from './post/post.component';
=======
import { CitiesDirective } from './cities.directive';
import { DescriptionComponent } from './description/description.component';
import { CityComponent } from './city/city.component';
>>>>>>> c6ae97cd54d631b8f1ce9f636b2def06c0f80c0a

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    CitiesComponent,
    NavBarComponent,
    CitiesDirective,
    DescriptionComponent,
<<<<<<< HEAD
    NavBarComponent,
    PostComponent
=======
    CityComponent
>>>>>>> c6ae97cd54d631b8f1ce9f636b2def06c0f80c0a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }