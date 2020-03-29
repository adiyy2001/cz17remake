import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../create-product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  val;
  constructor() { }

  ngOnInit() {
  }

  returnProductsList($event): void {
    const { items, count } = $event;
    this.val = [items,count];
  }
}
