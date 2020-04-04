import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NbpApiService } from './nbp-api.service';

import { HeaderComponent } from './header/header.component';
import { ListOfCurrencyComponent } from './list-of-currency/list-of-currency.component';
import { NbpCurrenciesExchangeRatesComponent } from './nbp-currencies-exchange-rates.component';
import { NbpCurrenciesExchangeRatesRoutingModule } from './nbp-currencies-exchange-rates-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ListOfCurrencyComponent,
    NbpCurrenciesExchangeRatesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NbpCurrenciesExchangeRatesRoutingModule
  ],
  exports: [],
  providers: [NbpApiService],
})
export class NbpCurrenciesExchangeRatesModule { }
