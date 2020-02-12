import { Component } from '@angular/core';
import { FilterModel } from './home/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'czk17Remake';
  public currentElement: FilterModel;
  public filterChanged(event: FilterModel): void {
    this.currentElement = event;
    console.log(event);
    // currency code mid
    // console.log(this.currentElement);
  }
}
