import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class UserService {
  saveUserTyped(user: any) {
    throw new Error('Method not implemented.');
  }
//wecan import userService in the different component.

constructor(protected http: HttpClient) { }
  public getUsers() :any {
    const url = 'https://gorest.co.in/public/v2/users';
  //  for get Request
    return this.http.get<any>(url);
  }
  public saveUser(user: any) {
    const url = 'https://gorest.co.in/public/v2/posts';
  //  for post Request
    return this.http.post<any>(url, user);
  }
}
