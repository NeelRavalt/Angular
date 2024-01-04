import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  inputs: ["child", "values"],
})
export class HomeComponent {
  addUserForm?: FormGroup | any;
  user: any;
  users: any;
  User: any[] = [];
  userData: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      id: new FormControl("", [Validators.required]),
      gender: new FormControl(),
      status: new FormControl(),
      name: new FormControl(),
    });

    this.userService.getUsers().subscribe((response: any) => {
      console.log("res", response);
      this.users = response;
    });

    this.userData = [
      {
        id: 1,
        name: "neel",
        email: "neel.example",
        gender: "male",
        status: "active",
      },
      {
        id: 5859479,
        name: "nilay",
        email: "nilay.example",
        gender: "female",
        status: "inactive",
      },
      {
        id: 5859477,
        name: "Pres. Bandhu Guneta",
        email: "guneta_bandhu_pres@schmidt.example",
        gender: "male",
        status: "active",
      },
      {
        id: 5859476,
        name: "Dr. Devagya Devar",
        email: "devagya_dr_devar@steuber-stark.example",
        gender: "male",
        status: "active",
      },
      {
        id: 5859475,
        name: "Shresth Singh",
        email: "shresth_singh@schmitt.example",
        gender: "female",
        status: "inactive",
      },
      {
        id: 5859474,
        name: "Chidananda Dubashi",
        email: "dubashi_chidananda@padberg-hessel.example",
        gender: "male",
        status: "inactive",
      },
      {
        id: 5859473,
        name: "Gov. Bhudeva Kocchar",
        email: "bhudeva_kocchar_gov@lockman.test",
        gender: "female",
        status: "active",
      },
      {
        id: 5859472,
        name: "Gov. Gandharva Prajapat",
        email: "gov_gandharva_prajapat@torphy.example",
        gender: "female",
        status: "active",
      },
      {
        id: 5859471,
        name: "Dhanu Achari",
        email: "achari_dhanu@mills.example",
        gender: "female",
        status: "active",
      },
      {
        id: 5859470,
        name: "Satyen Acharya III",
        email: "iii_satyen_acharya@dickinson-batz.example",
        gender: "male",
        status: "inactive",
      },
    ];
  }

  saveUser() {
    //by use of swapping we can store data in to array.
    const tempArray = this.userData;            //save dummy json data in to this variable
    tempArray.push(this.addUserForm.value);    // also share formgroup values in to this variable
    this.userData = tempArray;

    this.userService.saveUser(this.user).subscribe((response: any) => {
      console.log(response);
    });
  }
}
