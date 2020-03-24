import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductModel } from '../create-product/product.model';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Array<ProductModel[]>

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
  }

  getProducts(products: Array<ProductModel[]>): void {
    this.products = products;
  }
}
