import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  logged = true;
  hidden = false;

  evHidden(_hidden: Boolean){
    this.hidden = _hidden;
  }
}
