import { NgModule } from '@angular/core';
// <<<<<<< Two-way-binding
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
// =======
import { BrowserModule } from '@angular/platform-browser';
3-parent-to-child-child-to-parent-data-transfer

// >>>>>>> main
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// <<<<<<< Two-way-binding
@NgModule({
  declarations: [
    AppComponent,

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NeelpipePipe } from './neelpipe.pipe';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Child1Component } from './child1/child1.component';
 main

@NgModule({
  declarations: [
    AppComponent,
// <<<<<<< 3-parent-to-child-child-to-parent-data-transfer
// >>>>>>> main
    HomeComponent
  ],
  imports: [
    BrowserModule,
// <<<<<<< Two-way-binding
    AppRoutingModule,
    FormsModule

    AppRoutingModule
// =======
    HomeComponent,
    NeelpipePipe,
    FooterComponent,
    HeaderComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
// >>>>>>> main
// >>>>>>> main
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
