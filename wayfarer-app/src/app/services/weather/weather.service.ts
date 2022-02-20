import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  createAPIObservable(cityName: any) {
    return this.http
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fe5e3fefd2dff0a4c3240a2ccfd11aba`)
  }
}
