import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagmentRoutingModule } from './product-managment-routing.module';
import { ProductManagmentComponent } from './product-managment.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { FilterComponentComponent } from './filter-component/filter-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TableFotterComponent } from './table-fotter/table-fotter.component';


@NgModule({
  declarations: [ProductManagmentComponent, ListOfProductsComponent, FilterComponentComponent, ProductListComponent, TableFotterComponent],
  imports: [
    CommonModule,
    ProductManagmentRoutingModule
  ]
})
export class ProductManagmentModule { }
