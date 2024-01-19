import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
// <<<<<<< Event-binding

  clicks(){console.log('you cliked button')}
   
  getdata(){
    alert('sorry data is not available')
  }
=======
  title = 'practice-2';
// >>>>>>> main
}
