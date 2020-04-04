import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NbpCurrenciesExchangeRatesComponent } from './nbp-currencies-exchange-rates.component';

const routes: Routes = [
  { path: '', component: NbpCurrenciesExchangeRatesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NbpCurrenciesExchangeRatesRoutingModule { }
