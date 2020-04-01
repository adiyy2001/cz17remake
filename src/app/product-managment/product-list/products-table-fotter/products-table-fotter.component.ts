import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MyService } from '../../product.service';

@Component({
  selector: 'app-products-table-fotter',
  templateUrl: './products-table-fotter.component.html',
  styleUrls: ['./products-table-fotter.component.scss']
})
export class ProductsTableFotterComponent implements OnInit {
  @Output() private paginatorValue = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onChangeSelection(evt){
    const { length, pageIndex, pageSize } = evt;
    this.paginatorValue.emit([pageIndex, pageSize])
  }
}
