import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MyService } from '../../product.service';

@Component({
  selector: 'app-products-table-fotter',
  templateUrl: './products-table-fotter.component.html',
  styleUrls: ['./products-table-fotter.component.scss']
})
export class ProductsTableFotterComponent implements OnInit {
  @Output() listEmitter = new EventEmitter();
  list;
  constructor(private myService: MyService) { }

  ngOnInit() {
  }

  onChangeSelection(evt){
    const { length, pageIndex, pageSize } = evt;
    this.myService
        .getProducts(pageSize, pageIndex)
        .subscribe( list => {
          this.listEmitter.emit(list);
        });
  }
}
