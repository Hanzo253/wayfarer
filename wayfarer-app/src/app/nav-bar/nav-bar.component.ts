import { Component, OnInit, HostListener } from '@angular/core';
import { SlideshowService } from '../services/slideshow/slideshow.service';
import { debounceTime, Subject, distinctUntilChanged } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  city: any;
  searchSubject = new Subject();


  constructor(private slideShowService: SlideshowService, private router: Router  ) { }

  findCity(city: any){
    //alerts that a certain event is firing, whenever a certain event is firing => i want to return something
    //how the event is published
    //once event fires, it runs the api call
    if (city === "San Francisco" || city === "Seattle" || city === "Sydney" || city === "London" || city === "san francisco" || city === "seattle" || city === "sydney" || city === "london") {
      this.searchSubject.next(city);
      this.router.navigate([`/cities/${this.lowerCaseWord(city)}`]);
      this.city = undefined;
    } else {
      alert("City not avaliable.");
    }
  }

  toggleShowComponent() {
    this.slideShowService.toggleShowComponent();
  }

  //capitalizes every WORD in city names
  capitalizeEveryWord(name: string){
    return name.replace(/\w\S*/g, function(name){
      return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    });
  }

  lowerCaseWord(name: any) {
    if (name === undefined) {
      console.log("Waiting for input");
      if (name !== undefined) {
        return name.toLowerCase();
      }
    } else {
        return name.toLowerCase();
    }
  }

  onKeydownEvent(city: any){
    // this.searchSubject.next(city);
    // //necessary with key events
    // this.router.navigate([`/cities/${this.lowerCaseWord(city)}`]);
    if (city === "San Francisco" || city === "Seattle" || city === "Sydney" || city === "London" || city === "san francisco" || city === "seattle" || city === "sydney" || city === "london") {
      this.searchSubject.next(city);
      this.router.navigate([`/cities/${this.lowerCaseWord(city)}`]);
    } else {
      alert("City not avaliable.");
    }
  }


  ngOnInit(): void {
    this.searchSubject
    .subscribe(city => {
      console.log(city); 
    });
  }

}
