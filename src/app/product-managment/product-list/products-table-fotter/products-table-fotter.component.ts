import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-table-fotter',
  templateUrl: './products-table-fotter.component.html',
  styleUrls: ['./products-table-fotter.component.scss']
})
export class ProductsTableFotterComponent {
  @Output() public paginatorValue: EventEmitter<number[]> = new EventEmitter();

  public changeSelection(dataFromPaginatorSelection): void {
    const { previousPageIndex, pageIndex, pageSize, _length } = dataFromPaginatorSelection;
    this.paginatorValue.emit([pageIndex, pageSize]);
  }
}
