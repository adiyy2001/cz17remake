import { Component, OnInit} from '@angular/core';
import { MyService, PaginatedList } from '../product.service';
import { ProductModel } from '../create-product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit{
  productList: PaginatedList<ProductModel>;
  filterSpec: string;
  constructor(private myService: MyService) { }

  ngOnInit() {
  }

  returnProductsList([pageIndex, pageSize] = []): void {
        this.myService
        .getProducts(pageSize, pageIndex)
        .subscribe( list => {
          this.productList = list;
        });
  }

  filterValue(filter: string): void{
    this.filterSpec = filter;
  }
}
