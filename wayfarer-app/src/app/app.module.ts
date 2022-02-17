import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    NavBarComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
