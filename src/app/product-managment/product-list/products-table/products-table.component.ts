import { Component, OnInit } from '@angular/core';
import { MyService } from '../../product.service';
import { ProductModel } from '../../create-product/product.model';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'tags', 'categories', 'description', 'edit', 'delete'];
  public products: Array<ProductModel> = [];

  public constructor(private myService: MyService) {
  }

  public ngOnInit(): void {
    this.getProducts();
  }

  public deleteProduct(product: ProductModel) {
    this.myService
<<<<<<< HEAD
        .deleteProduct(product)
        .subscribe(prd => {
          this.products = prd;
        })
    // Tutaj zrobic call do myService zeby usunac produkt
=======
      .deleteProduct(product.id)
      .subscribe(_ => {
        // po usunięciu produktu pobieram całą listę od nowa
        this.getProducts();
      })
>>>>>>> 74be9f114d9cca096833e6cb97867daef75542c2
  }

  private getProducts(): void {
    this.myService
      .getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }
}
