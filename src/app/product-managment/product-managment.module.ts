import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductManagmentRoutingModule } from './product-managment-routing.module';
import { ProductManagmentComponent } from './product-managment.component';
import { ProductsTableFilterComponent } from './product-list/products-table-filter/products-table-filter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsTableFotterComponent } from './product-list/products-table-fotter/products-table-fotter.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsTableComponent } from './product-list/products-table/products-table.component';

import { MyService } from './product.service';


@NgModule({
  declarations: [
    ProductManagmentComponent,
    ProductsTableFilterComponent,
    ProductListComponent,
    ProductsTableFotterComponent,
    CreateProductComponent,
    ProductsTableComponent
  ],
  imports: [
    CommonModule,
    ProductManagmentRoutingModule,
    FormsModule
  ],
  exports: [ProductManagmentRoutingModule],
  providers: [MyService]
})
export class ProductManagmentModule { }
