import { Component, OnInit, Input } from "@angular/core";
import { RateApiModel } from "../apimodel";
import { ApiService } from "../api.service";
@Component({
  selector: "app-list-of-currency",
  templateUrl: "./list-of-currency.component.html",
  styleUrls: ["./list-of-currency.component.scss"]
})
export class ListOfCurrencyComponent implements OnInit {
  @Input() elem: RateApiModel;
  public results;
  // public currencyInfo = this.elem; ask is it good way
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const checkElemExist = setInterval(() => {
      if (this.elem !== undefined) {
        clearInterval(checkElemExist);
        this.apiService.getSelectedCurrency(this.elem.code).subscribe(data => {
          this.results = data;
        })
      }
    }, 100)
  }


}
