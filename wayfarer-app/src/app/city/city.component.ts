import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { WeatherService } from '../services/weather/weather.service';
import { NewPosts } from '../newposts';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cities: any = CITIES;

  city: any;

  posts: any = CITIES[0].posts

  @Input() cityName: string = "";

  weather: any;

  searchSubject = new Subject;

  constructor(private route: ActivatedRoute, private modalService: NgbModal, private weatherService: WeatherService) { }

  findWeather(cityName: string) {
    this.searchSubject.next(cityName);
    
  }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }

  openCreatePost(postContent: any) {
    this.modalService.open(postContent);
  }

  //capitalizes every WORD in city names
  capitalizeEveryWord(name: string){
    return name.replace(/\w\S*/g, function(name){
      return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    });
  }

  convertKelvinToFahrenheit(temperature: any) {
    return Math.round((((temperature-273.15) * 1.8) + 32) * 100) / 100;
  }

  onSubmit(title: any, user: any, body: any, imgForPost: any) {

    switch(this.city.name){
        case 'san francisco':{
          CITIES[0].posts.push(new NewPosts(title, user, body, imgForPost));
          break;
        }
        case 'london':{
          CITIES[1].posts.push(new NewPosts(title, user, body, imgForPost));
          break;
        }
        case 'sydney':{
          CITIES[2].posts.push(new NewPosts(title, user, body, imgForPost));
          break;
        }
        case 'seattle':{
          CITIES[3].posts.push(new NewPosts(title, user, body, imgForPost));
          break;
        }
      }
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = CITIES.find(city => {
        // let paramId: string = params.get('id') || '';
        let paramName: string = params.get('name') || '';
        // return city.id === parseInt(paramId);
        return city.name === paramName;
      })
    });
    this.searchSubject.subscribe(cityName => {
      this.route.paramMap.subscribe(params => {
        cityName = CITIES.find(city => {
          let paramName: string = params.get('name') || '';
          // console.log(paramName);
          this.weatherService.createAPIObservable(paramName)
          .subscribe(response => {
              // console.log(response);
        
              this.weather = response;      
          })
        })
      })
      // this.weatherService.createAPIObservable(cityName)
      // .subscribe(response => {
      //   console.log(response);
        
      //   this.weather = response;      
      // })
    })
    this.findWeather(this.cityName);
  }

}
