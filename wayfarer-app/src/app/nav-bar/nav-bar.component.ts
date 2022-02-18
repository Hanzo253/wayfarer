import { Component, OnInit } from '@angular/core';
import { SlideshowService } from '../services/slideshow/slideshow.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private slideShowService: SlideshowService, ) { }

  toggleShowComponent() {
    this.slideShowService.toggleShowComponent();
  }

  ngOnInit(): void {
  }

}
