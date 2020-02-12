import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../api.service';

import { HeaderComponent } from './header/header.component';
import { ListOfCurrencyComponent } from './list-of-currency/list-of-currency.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ListOfCurrencyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [],
    providers: [ApiService],

})
export class HomeModule { }
