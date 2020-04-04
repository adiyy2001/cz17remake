import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NbpApiService } from '../nbp-api.service';
import { FilterModel } from './filter.model';
import { CurrencyModel } from './currency.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() searchClick = new EventEmitter<FilterModel>();
  public currencies: Array<CurrencyModel>;
  public numbers: Array<number> = [5, 10, 15, 20, 25];
  public selectedCurrency: CurrencyModel;
  public selectedNumber: number;

  constructor(private apiService: NbpApiService) { }

  ngOnInit() {
    this.apiService.getCurrency().subscribe(data => {
      this.currencies = data[0].rates;
    });
  }

  public currentValue() {
    if (!this.selectedCurrency || !this.selectedNumber) {
      return;
    }

    const selectedFilters = new FilterModel(this.selectedCurrency.code, this.selectedNumber);
    this.searchClick.emit(selectedFilters);
  }
}


