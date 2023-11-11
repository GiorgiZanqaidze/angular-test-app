import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-test-app';


  user: {name: string, age: number} = {
    name: 'giorgi',
    age: 5
  }

}
