import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyService } from '../../product.service';
import { ProductModel } from '../../create-product/product.model';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'tags', 'categories', 'description', 'edit', 'delete'];
  public products: MatTableDataSource<ProductModel[]> = new MatTableDataSource();
  // dataSource: MatTableDataSource<products[]>;
  @Output() emitProducts: EventEmitter<any> = new EventEmitter<any>();

  public constructor(private myService: MyService) {
  }

  public ngOnInit(): void {
    this.getProducts();
    this.emitProducts.emit(this.products)
  }

  // IterableDiffer

  public deleteProduct(product: ProductModel) {
    this.myService
      .deleteProduct(product.id)
      .subscribe(_ => {
        // po usunięciu produktu pobieram całą listę od nowa
        this.getProducts();
      })
  }


  private getProducts(): void {
    this.myService
      .getProducts()
      .subscribe(products => {
        this.products = products as unknown as MatTableDataSource<ProductModel[]>;
      });
  }
}
