import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title:any = 'practice-2';   // we can use this as property
  name:any = 'neel'
}
