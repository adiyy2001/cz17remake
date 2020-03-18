import { Component, OnInit } from '@angular/core';
import { MyService } from '../../product.service';
import { ProductModel } from '../../create-product/product.model';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  displayedColumns: string[] = ['name','tags','categories','description','edit','delete'];
  public products: Array<ProductModel> = [];

  public constructor(private myService: MyService) {
  }

  public ngOnInit(): void {
    this.myService
        .getLastAddedProduct()
        .subscribe(prd => {
      this.products.push(prd);
    });
  }

  public deleteProduct(product: ProductModel[]) {
    this.myService
        .deleteProduct(product)
        .subscribe(prd => {
          this.products = prd;
        })
    // Tutaj zrobic call do myService zeby usunac produkt
  }

}
