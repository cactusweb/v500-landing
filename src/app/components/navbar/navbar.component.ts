import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showLinks: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo( blockId: string, e: any ){
    e.preventDefault();
    document.getElementById(blockId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

}
