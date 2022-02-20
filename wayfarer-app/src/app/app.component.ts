import { Component, OnInit } from '@angular/core';
import { SlideshowService } from './services/slideshow/slideshow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wayfarer';
  showComponent: boolean = this.slideShowService.getShowComponent();


  constructor(private slideShowService: SlideshowService) {
  }

  onKeyDownEvent(event: any){
    console.log(event.target.value);
  }


  ngOnInit() {
  }
}
