import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSearchClick = new EventEmitter<FilterModel>();
  currencies: Array<CurrencyModel>;
  numbers: Array<number> = [5, 10, 15, 20, 25];
  selectedCurrency: CurrencyModel;
  selectedNumber: number;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCurrency().subscribe(data => {
      this.currencies = data[0].rates;
    });
  }

  public currentValue() {
    const selectedFilters = new FilterModel(this.selectedCurrency.code, this.selectedNumber);
    this.onSearchClick.emit(selectedFilters);
  }
}

export class FilterModel{
  constructor(public currencyCode: string, public days: number ) {}
}

export class CurrencyModel {
  constructor(public currency: string, public code: string, public mid: number  ) {}
}
