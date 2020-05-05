import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-products-table-filter',
  templateUrl: './products-table-filter.component.html',
  styleUrls: ['./products-table-filter.component.scss']
})
export class ProductsTableFilterComponent {
  @Output() public emitFilterSpecification: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();
  @ViewChild('filterValue') filterValue: ElementRef;

  public applyFilter(): void{
    this.emitFilterSpecification.emit(this.filterValue.nativeElement.value)
  }
}
