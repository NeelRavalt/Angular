import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class UserService {
  saveUserTyped() {
    throw new Error("Method not implemented.");
  }

  //wecan import userService in the different component.
  headers = new HttpHeaders().set("token", localStorage.getItem("token") ?? "");

  constructor(protected http: HttpClient) {}
  
  public getUsers(): any {
    const url = "https://gorest.co.in/public/v2/users";
    return this.http.get<any>(url);
  }
  public saveUser(user: any) {
    const url = "https://gorest.co.in/public/v2/posts";
    return this.http.post<any>(url, user, { headers: this.headers });
  }
}
