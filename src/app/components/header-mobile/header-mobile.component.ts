import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToMain(){
    document.getElementById('start-main-mobile')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

}
