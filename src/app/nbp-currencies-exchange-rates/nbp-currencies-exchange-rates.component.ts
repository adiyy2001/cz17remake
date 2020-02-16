import { Component } from '@angular/core';
import { FilterModel } from "./header/filter.model";

@Component({
  selector: 'app-nbp-currencies-exchange-rates',
  templateUrl: './nbp-currencies-exchange-rates.component.html',
  styleUrls: ['./nbp-currencies-exchange-rates.component.scss']
})
export class NbpCurrenciesExchangeRatesComponent {
  public currentElement: FilterModel;

  public filterChanged(event: FilterModel): void {
    this.currentElement = event;
  }
}

