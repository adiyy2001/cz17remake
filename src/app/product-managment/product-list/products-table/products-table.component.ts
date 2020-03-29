import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MyService } from '../../product.service';
import { ProductModel } from '../../create-product/product.model';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit, OnChanges {
  public displayedColumns: string[] = ['name', 'tags', 'categories', 'description', 'edit', 'delete'];
  public products: MatTableDataSource<ProductModel[]> = new MatTableDataSource();
  // dataSource: MatTableDataSource<products[]>;
  @Input() listOfItems;
  public constructor(private myService: MyService) {
  }

  public ngOnInit(): void {
    this.myService.getProducts().subscribe(c => {
      this.products = c.items as unknown as MatTableDataSource<ProductModel[]>
    })
  }

  ngOnChanges(_changes: SimpleChanges){
    if(_changes.listOfItems.currentValue){
      console.log(_changes.listOfItems.currentValue[0]);
      this.products = _changes.listOfItems.currentValue[0];
    };
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
    // this.myService
    //   .getProducts()
    //   .subscribe(products => {
    //     this.products = products as unknown as MatTableDataSource<ProductModel[]>;
    //   });

  }
}
