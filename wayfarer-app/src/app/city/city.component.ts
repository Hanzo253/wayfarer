import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities/cities';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { WeatherService } from '../services/weather/weather.service';
import { userPost } from './userPost';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cities: any = CITIES;
  city: any;
  posts: any = CITIES[0].posts
  postTitle: any 
  searchValue:string = '';
  createPostForm :any 

  // title : any;
   
  // bigPost = new userPost('Great Trip', 'Mike', 'Wish we could stay longer');
 
  // @ViewChild('createPostForm',{static:false}) createPostForm :NgForm
  @Input() cityName: string = "";

  weather: any;

  searchSubject = new Subject;

  constructor(private route: ActivatedRoute, private modalService: NgbModal, private weatherService: WeatherService) { }

  findWeather(cityName: string) {
    this.searchSubject.next(cityName);
    
  }

  findTitle(postTitle :any ){
    this.postTitle = ''
    console.log(postTitle = '')
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

  

  handleClear(){
    // clearing the value
  // this.inputTitle.nativeElement.value = ' ';
  // this.createPostForm.resetForm();
}




  onSubmit(title:string, user:string, body:string, image: string){
    // for(let i = 4; i < this.postTitle.length ; i++){
    //   this.postTitle[i] = 'fsdfsdf'

    // }
    // console.log(this.posts.push(this.postTitle))
    // 
    // this.postTitle = Object.assign(this.postTitle,{
    //   title: title, user:user, body: description
    // });
    // this.posts.push(new userPost(title, user, body, image))
    console.log(this.posts)
    console.log(this.city.name)

    switch(this.city.name){
        case 'san francisco':{
          CITIES[0].posts.push(new userPost(title, user, body, image))
          break
        }
        case 'london':{
          CITIES[1].posts.push(new userPost(title, user, body, image))
          break
        }
        case 'sydney':{
          CITIES[2].posts.push(new userPost(title, user, body, image))
          break
        }
        case 'seattle':{
          CITIES[3].posts.push(new userPost(title, user, body, image))
          break
        }
    }
     
    title = ''
    user = ''
    body = ''

    
    // this.route.paramMap.subscribe(params => {
    //   CITIES.find(() => {
    //     let paramId: string = params.get('id') || '';
    //     // CITIES[parseInt(paramId)].posts.push(new userPost(title, user, body, image))
    //     console.log(CITIES[parseInt(paramId)])
    //     console.log(paramId)
    //     // console.log(this.posts)
    //   })
    // });
  }

  // storeTitleValue() {
  //   if (this.title)
  // }

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
