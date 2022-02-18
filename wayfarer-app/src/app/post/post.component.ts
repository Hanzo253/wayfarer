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
  post: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      let postId : string = params.get('postId') ||'';
      this.city = CITIES.find(city => { 
        // let postId: string = params.get('postId')
        let paramId: string = params.get('id') || '';
        // this.post = params.get('i')
        return city.id === parseInt(paramId);
      })
      this.post = this.city.posts[postId]
    });
    
  }

}
