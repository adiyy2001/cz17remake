import { Component, OnInit, Injectable, Input } from '@angular/core';
import { MyService } from '../../product.service';
import { ProductModel } from '../../create-product/product.model';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  public products: Array<ProductModel> = [
    {
      categories: 'any',
      description: 'string',
      name: 'string',
      tags: 'string'
    }
  ];

  public constructor(private myService: MyService) {
  }

  public ngOnInit(): void {
    this.myService.getLastAddedProduct().subscribe(prd => {
      this.products.push(prd);
    });
  }


  public deleteProduct(product: ProductModel) {

    // Tutaj zrobic call do myService zeby usunac produkt
    console.log(product);
  }

}
