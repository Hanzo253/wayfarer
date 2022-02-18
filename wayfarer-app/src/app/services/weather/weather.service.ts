import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  createAPIObservable(zip: any) {
    return this.http
    .get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=fe5e3fefd2dff0a4c3240a2ccfd11aba`)
  }
}
