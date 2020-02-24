import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagmentRoutingModule } from './product-managment-routing.module';
import { ProductManagmentComponent } from './product-managment.component';
import { FilterComponentComponent } from './filter-component/filter-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TableFotterComponent } from './table-fotter/table-fotter.component';
import { CreateProductComponent } from './create-product/create-product.component';


@NgModule({
  declarations: [
    ProductManagmentComponent,
    FilterComponentComponent,
    ProductListComponent,
    TableFotterComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    ProductManagmentRoutingModule
  ],
  exports: [ProductManagmentRoutingModule]
})
export class ProductManagmentModule { }
