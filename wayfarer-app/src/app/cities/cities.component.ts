import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CITIES } from '../cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: any = CITIES

  constructor() { }

  //intialized here for city icon labels
  capitalizeEveryWord(name: string){
    return name.replace(/\w\S*/g, function(name){
      return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
  });
  }

  ngOnInit(): void {
    
  }

}
