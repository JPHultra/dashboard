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

  evHidden(_hidden: boolean){
    this.hidden = _hidden;
  }
}
