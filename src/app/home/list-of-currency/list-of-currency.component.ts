import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../../api.service';
import { FilterModel } from '../header/header.component';
@Component({
  selector: 'app-list-of-currency',
  templateUrl: './list-of-currency.component.html',
  styleUrls: ['./list-of-currency.component.scss'],
  providers: [ ApiService ]
})
export class ListOfCurrencyComponent implements OnInit, OnChanges {

  @Input() elem: FilterModel;
  public results;
  private country: string;
  private tableNr: string;
  // public currencyInfo = this.elem; ask is it good way
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

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
