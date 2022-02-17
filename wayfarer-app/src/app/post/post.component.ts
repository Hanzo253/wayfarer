import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  cities: any = CITIES;
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
    });
  }

}
