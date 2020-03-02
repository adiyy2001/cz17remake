import { Component, OnInit, Injectable } from '@angular/core';
import { MyService } from '../../product.service';
import { ProductModel } from '../../create-product/product.model';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
@Injectable()
export class ProductsTableComponent implements OnInit {
  public data: Array<ProductModel> = [
    {
      name: 'wew',
      tags: 'tags',
      categories: 'wqe',
      description: 'wqe'
    }
  ];

  public constructor(private myService: MyService) {
    this.myService.getSavedProducts().subscribe(product => {
      console.log(product);
    })
  }

  ngOnInit() { }

}
