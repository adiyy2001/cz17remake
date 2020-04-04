import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-table-filter',
  templateUrl: './products-table-filter.component.html',
  styleUrls: ['./products-table-filter.component.scss']
})
export class ProductsTableFilterComponent implements OnInit {
  @Output() private emitFilterSpec = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.emitFilterSpec.emit(filterValue);
  }
}
