import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlideshowDirective } from './slideshow.directive';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    SlideshowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
