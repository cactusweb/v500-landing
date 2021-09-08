import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { 
    if ( this.router.url == '/' || this.router.url == '' || this.router.url[1] == '?' )
      return;
    
    window.location.href = `https://dash.v500-cook.com${this.router.url}`;
  }

  ngOnInit(): void {
  }

}
