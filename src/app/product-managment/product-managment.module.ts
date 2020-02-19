import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagmentRoutingModule } from './product-managment-routing.module';
import { ProductManagmentComponent } from './product-managment.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';


@NgModule({
  declarations: [ProductManagmentComponent, ListOfProductsComponent],
  imports: [
    CommonModule,
    ProductManagmentRoutingModule
  ]
})
export class ProductManagmentModule { }
