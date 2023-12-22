import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Child1Component } from './child1/child1.component';

const routes: Routes = [{
  path:'footer', component:FooterComponent
},
{
  path:'header', component:HeaderComponent
},
{
  path:'home', component:HomeComponent,
  children: [
    {
      path: 'child1', component: Child1Component,  
    }
  
  ],
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
