import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [ HttpClientModule]
})
export class UserComponent  {
 
    users = new Array<any>();
  
    constructor(protected userService: UserService) { }
  
    ngOnInit(): void {
      this.userService.getUsers().subscribe((response:any) => {
        console.log('res',response);
        
          this.users = response;
      });
    }
  
  }


