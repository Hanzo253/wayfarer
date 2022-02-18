import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { NavBarComponent } from '../nav-bar.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: '../nav-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  city: string = '';

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }

}
