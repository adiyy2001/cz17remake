import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ProductModel } from '../../create-product/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products-table-fotter',
  templateUrl: './products-table-fotter.component.html',
  styleUrls: ['./products-table-fotter.component.scss']
})
export class ProductsTableFotterComponent implements OnInit, AfterViewInit {
  @Input() paginatorDate;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.paginatorDate);
    this.paginatorDate.paginator = this.paginator;
    console.log(this.paginatorDate.paginator);
  }
}
