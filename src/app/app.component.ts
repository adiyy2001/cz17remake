import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "czk17Remake";
  currentElement;
  
  currentCurrency(event: Event): void {
    this.currentElement = event;
    // currency code mid
  }
}
