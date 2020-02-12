import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../api.service';

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

  constructor(private apiService: ApiService) { }

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

export class FilterModel {
  constructor(public currencyCode: string, public days: number) { }
}

export class CurrencyModel {
  constructor(public currency: string, public code: string, public mid: number) { }
}
