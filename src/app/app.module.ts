import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { ProductManagmentComponent } from './product-managment/product-managment.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductManagmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // moduł home jest Eager load
    HomeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
