import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'practice-2';
  salary: number = 30000;
  work: string = 'software developer';
  position: string = 'frontend developer'
  date = new Date();


  arrays: any = [
    {id:1, name: 'neel', email: 'neel12@gmail.com' },
    {id:2, name: 'neel', email: 'neel12@gmail.com' },
    {id:3,name: 'neel', email: 'neel12@gmail.com' },
  ];


}
