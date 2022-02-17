import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CITIES } from './cities/cities';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
  {
    path: '',
    component: SlideshowComponent
  },
  {
    path: 'cities',
<<<<<<< HEAD
    component: CitiesComponent
},
{
  path: '',
  component: SlideshowComponent
},{
  path: 'cities/:id',
  component: CitiesComponent
}
=======
    component: CitiesComponent,
    children: [
      {
        path: 'cities/:id',
        component: CityComponent
      }
    ]
  }
>>>>>>> c6ae97cd54d631b8f1ce9f636b2def06c0f80c0a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
