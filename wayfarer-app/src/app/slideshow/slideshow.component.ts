import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  // images: any;
  images = ["san-francisco-landing", "sydney-landing", "seattle-landing", "london-landing"].map((name) => `./assets/images/${name}.jpg`);

  constructor() { }

  ngOnInit(): void {
   
  }

  
  

  
}
