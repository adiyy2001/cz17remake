import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  currencies;
  selectedValue: any;
  @Output() add = new EventEmitter();
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCurrency().subscribe(data => {
      this.currencies = data[0].rates;
    });
  }

  public currentValue(){
    this.add.emit(this.selectedValue);
  }
}
