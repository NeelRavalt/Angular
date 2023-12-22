import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'practice-2';
  
  arrays: any = [
    {id:1, name: 'neel', email: 'neel@gmail.com' },
    {id:2, name: 'nilay', email: 'nilay1@gmail.com' },
    {id:3,name: 'neel', email: 'neel2@gmail.com' },
    {id:4, name: 'nilay', email: 'nilay2@gmail.com' },
    {id:5,name: 'neel', email: 'neel3@gmail.com' },
  ];


}
