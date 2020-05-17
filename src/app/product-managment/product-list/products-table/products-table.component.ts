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
  public arrayOfItems: MatTableDataSource<ProductModel[]> = new MatTableDataSource();
  @Input() public pagList;
  public constructor(private myService: MyService) {
  }

  public ngOnInit(): void {
    this.myService.getProducts().subscribe(list => {
      this.arrayOfItems = list.items as unknown as MatTableDataSource<ProductModel[]>;
    })
  }

   public ngOnChanges(_changes: SimpleChanges): void{
    if(_changes.pagList.currentValue !== undefined) {
      this.arrayOfItems = _changes.pagList.currentValue.items;
    }
  }


  public deleteProduct(product: ProductModel): void {
    this.myService
      .deleteProduct(product.id)
      .subscribe( _ => {
        this.myService.getProducts().subscribe(paginated => {
          this.arrayOfItems = new MatTableDataSource<ProductModel[]>();
            this.arrayOfItems.data = paginated.items as unknown as ProductModel[][];
        });
      })
  }



}
