import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {


  title = 'practice-2';
  name:string = 'neel nilay'
  


  title:any = 'practice-2';   // we can use this as property
  name:any = 'neel'


  title = 'practice-2';


  clicks(){console.log('you cliked button')}
   
  getdata(){
    alert('sorry data is not available')
  }

  title = 'practice-2';


}

}

