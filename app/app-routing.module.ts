
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
 
  {path:'footer', component:FooterComponent},
  {path:'user', component:UserComponent},
{
  path:'header', component:HeaderComponent
},
{
  path:'home', component:HomeComponent,
  
},
  

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { Child1Component } from "./child1/child1.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "footer",
    pathMatch: "full", //redirect path page run thay tyare direct show thai jay
  },

  {
    path: "footer",
    component: FooterComponent,
  },
  {
    path: "header",
    component: HeaderComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "child1",
        component: Child1Component,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

  exports: [RouterModule],
})
export class AppRoutingModule {}

