import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hidden = false;

  @Output() eventHidden = new EventEmitter<Boolean>();

  user = {
    name: "João Gomes"
  }

  constructor() { }

  ngOnInit(): void {
  }

  showHideSideNav() {
    this.hidden = !this.hidden;
    this.eventHidden.emit(this.hidden);
  }

}
