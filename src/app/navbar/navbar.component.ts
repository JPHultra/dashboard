import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hidden = false;

  user = {
    name: "João Gomes"
  }

  constructor() { }

  ngOnInit(): void {
  }

  showHideSideNav() {
    this.hidden = !this.hidden;
  }

}
