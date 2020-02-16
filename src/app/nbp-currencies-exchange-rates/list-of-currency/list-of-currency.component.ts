import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilterModel } from "../header/filter.model";
import { NbpApiService } from '../nbp-api.service';

@Component({
  selector: 'app-list-of-currency',
  templateUrl: './list-of-currency.component.html',
  styleUrls: ['./list-of-currency.component.scss']
})
export class ListOfCurrencyComponent implements OnChanges {

  @Input() elem: FilterModel;
  public results;

  constructor(private apiService: NbpApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.elem && changes.elem.currentValue) {
      this.getData();
    }
  }

  private getData(): void {
    this.apiService.getSelectedCurrency(this.elem.currencyCode, this.elem.days).subscribe(data => {
      this.results = data;
    });
  }
}
