import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  inputs:['child','values'],
})
export class HomeComponent {
child:any
values:any
}
