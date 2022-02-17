import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities/cities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  cities: any =CITIES;
  city: any;
  posts: any;



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      this.cities = CITIES.find(cities => {
        let paramId: string = params.get('id') || '';
        return cities.id === parseInt(paramId);
      })
    })
  }

}
