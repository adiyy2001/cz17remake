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
  // public currencyInfo = this.elem;
  constructor() { }

  ngOnInit() {

  }

  checkElemExist = setInterval(() => {
    if (this.elem !== undefined) {
      clearInterval(this.checkElemExist);
      ApiService.prototype.getSelectedCurrency(this.elem.code).subscribe(data => {
        console.log(data);
      })
    }
  }, 100)
}
