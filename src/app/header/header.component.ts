import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  currencies;
  selectedValue;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCurrency().subscribe(data => {
      this.currencies = data[0].rates;
    });
  }

  public searchForStatus() {
    this.selectedValue = this.currencies[0];
    console.log(this.selectedValue);
  }
}
