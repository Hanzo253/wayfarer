import { Component, OnInit } from '@angular/core';
import { SlideshowService } from '../services/slideshow/slideshow.service';
// import { SearchService } from './search.service';

import { CityComponent } from '../city/city.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  city: string = '';

  constructor(private slideShowService: SlideshowService, ) { }

  toggleShowComponent() {
    this.slideShowService.toggleShowComponent();
  }

  //search for city's page
  findCity(city: string){

  }

  ngOnInit(): void {
  }

}
