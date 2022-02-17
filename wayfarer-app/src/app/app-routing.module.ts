import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CITIES } from './cities/cities';
import { CitiesComponent } from './cities/cities.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent
},
{
  path: '',
  component: SlideshowComponent
},{
  path: 'cities/:id',
  component: CitiesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
