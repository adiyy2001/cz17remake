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
  @Input() private listOfItems;
  @Input() private filterDate: string;
  public constructor(private myService: MyService) {
  }

  public ngOnInit(): void {
    this.myService.getProducts().subscribe(list => {
      this.products = list.items as unknown as MatTableDataSource<ProductModel[]>
    })
  }

   public ngOnChanges(_changes: SimpleChanges): void{
    if(_changes.listOfItems.currentValue !== _changes.listOfItems.previousValue){
      this.products = _changes.listOfItems.currentValue.items;
    };
    // if(_changes.filterDate.currentValue !== _changes.filterDate.previousValue){
    //   this.products.filter = _changes.filterDate.currentValue.trim().toLowerCase();
    //   console.log(this.products);
    // };
  }

  // IterableDiffer

  public deleteProduct(product: ProductModel) {
    console.log()
    this.myService
      .deleteProduct(product.id)
      .subscribe(_ => {
        // po usunięciu produktu pobieram całą listę od nowa
      })
  }


  private getProducts(): void {
  }
}
