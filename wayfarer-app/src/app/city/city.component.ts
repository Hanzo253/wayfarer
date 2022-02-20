import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cities: any = CITIES;

  city: any;

  constructor(private route: ActivatedRoute) { }

  //capitalizes every WORD in city names
  capitalizeEveryWord(name: string){
    return name.replace(/\w\S*/g, function(name){
      return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
  });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = CITIES.find(city => {
        let paramName: string = params.get('name') || '';
        return city.name ===paramName;
      })
    });
    console.log(this.city);
  }

}
