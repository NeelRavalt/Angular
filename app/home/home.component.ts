import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  inputs: ['child', 'values'],
})

export class HomeComponent {
  addUserForm?: FormGroup | any;
  user: any;
  users: any

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
    });
    
  }

  saveUser() {
    this.user = this.addUserForm.value;
    this.userService.saveUser(this.user).subscribe(
      (response: any) => {
        console.log(response);
        this.users.push(response); // Assuming the response already has the structure of User
        this.addUserForm.reset(); // Reset the form after successful submission
      },
      (error: any) => {
        console.error('Error saving user:', error);
      }
    );
  }
  
}
