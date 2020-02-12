import { Component } from '@angular/core';
import { FilterModel } from './header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
})

export class homeComponent {
  title = 'czk17Remake';
  public currentElement: FilterModel;
  public filterChanged(event: FilterModel): void {
    this.currentElement = event;
    console.log(event);
    // currency code mid
    // console.log(this.currentElement);
  }
}
