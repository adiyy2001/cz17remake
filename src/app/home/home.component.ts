import { Component } from '@angular/core';
import { FilterModel } from './header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public currentElement: FilterModel;

  public filterChanged(event: FilterModel): void {
    this.currentElement = event;
  }
}
