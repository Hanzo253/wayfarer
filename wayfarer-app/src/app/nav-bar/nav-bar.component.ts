import { Component, OnInit, HostListener } from '@angular/core';
import { SlideshowService } from '../services/slideshow/slideshow.service';
import { Subject } from 'rxjs';
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
    this.searchSubject.next(city);
    
  }

  toggleShowComponent() {
    this.slideShowService.toggleShowComponent();
  }

  onKeydownEvent(city: any){
    this.searchSubject.next(city);
    //necessary with key events
    this.router.navigate([`/cities/${city}`]);
  }


  ngOnInit(): void {
    this.searchSubject.subscribe(city => {
      console.log(city); 
    });
  }

}
