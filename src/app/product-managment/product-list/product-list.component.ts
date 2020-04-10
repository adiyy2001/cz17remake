import { Component } from '@angular/core';
import { MyService, PaginatedList } from '../product.service';
import { ProductModel } from '../create-product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {
  public productList: PaginatedList<ProductModel>;
  public filterSpecification: string;

  constructor(private myService: MyService) { }


  public getProductsList([pageIndex, pageSize] = []): void {
    this.myService
      .getProducts(pageSize, pageIndex)
      .subscribe(list => {
        this.productList = list;
      });
  }

  public changeFilterValue(filter: string): void {
    this.filterSpecification = filter;
  }
}
