import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-products-table-filter',
  templateUrl: './products-table-filter.component.html',
  styleUrls: ['./products-table-filter.component.scss']
})
export class ProductsTableFilterComponent {
  @Output() private emitFilterSpecification: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();
  @ViewChild('filterValue') filterValue: ElementRef;
  public applyFilter() {
    console.log(this.filterValue.nativeElement.value);
    return this.emitFilterSpecification.emit(this.filterValue.nativeElement.value);
  }
}
