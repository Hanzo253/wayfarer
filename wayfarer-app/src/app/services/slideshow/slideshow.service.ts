import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  showComponent: boolean = true;

  constructor() { }

  toggleShowComponent() {
    this.showComponent = !this.showComponent;
    console.log(this.showComponent);
    
  }

  getShowComponent() {
    return this.showComponent;
  }
}
