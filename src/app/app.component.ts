import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListComponent} from './list/list.component'

@Component({
  selector: 'app-root',
  imports: [ ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'naumen-test';
}
