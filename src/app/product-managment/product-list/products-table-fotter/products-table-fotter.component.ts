import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-table-fotter',
  templateUrl: './products-table-fotter.component.html',
  styleUrls: ['./products-table-fotter.component.scss']
})
export class ProductsTableFotterComponent {
  @Output() public paginatorValue: EventEmitter<number[]> = new EventEmitter();

  public onChangeSelection(dataFromPaginatorSelection: { _length: number, pageIndex: number, pageSize: number }): void {
    const { _length, pageIndex, pageSize } = dataFromPaginatorSelection;
    this.paginatorValue.emit([pageIndex, pageSize]);
  }
}
