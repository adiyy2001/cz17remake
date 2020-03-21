import { Component, OnInit } from '@angular/core';
import { MyService } from '../../product.service';
import { ProductModel } from '../../create-product/product.model';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'tags', 'categories', 'description', 'edit', 'delete'];
  public products: Array<ProductModel> = [];

  public constructor(private myService: MyService) {
  }

  public ngOnInit(): void {
    this.getProducts();
  }

  public deleteProduct(product: ProductModel) {
    this.myService
      .deleteProduct(product.id)
      .subscribe(_ => {
        // po usunięciu produktu pobieram całą listę od nowa
        // this.getProducts();
      })
      this.ngOnInit();
  }


  private getProducts(): void {
    this.myService
      .getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }
}
