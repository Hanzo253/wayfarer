import { Directive, HostListener, ElementRef } from '@angular/core';
// import { DescriptionComponent } from './description/description.component';
// import { SlideshowComponent } from './slideshow/slideshow.component';

@Directive({
  selector: '[appCitiesDirective]'
})
export class CitiesDirective {



  constructor(private ele : ElementRef) { }

  private disappear(display: string) {
    // this.ele.nativeElement.style.display = display;
    // document.querySelector('.city-carousel').style.display = display;
  }

  @HostListener('click') onClick() {
    this.disappear('none');
  }

}
