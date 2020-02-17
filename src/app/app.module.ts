import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { GoldStatusComponent } from './gold-status/gold-status.component';

@NgModule({
  declarations: [
    AppComponent,
    GoldStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
