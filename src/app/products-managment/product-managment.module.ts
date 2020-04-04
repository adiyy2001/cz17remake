import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProductManagmentRoutingModule } from './product-managment-routing.module';
import { ProductManagmentComponent } from './product-managment.component';
import { ProductsTableFilterComponent } from './product-list/products-table-filter/products-table-filter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsTableFotterComponent } from './product-list/products-table-fotter/products-table-fotter.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsTableComponent } from './product-list/products-table/products-table.component';

import { MyService } from './product.service';
import { EditProductComponent } from './edit-product/edit-product.component';
// Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const materialModules = [MatInputModule, MatButtonModule, MatSelectModule, MatTableModule, MatPaginatorModule];

@NgModule({
  declarations: [
    ProductManagmentComponent,
    ProductsTableFilterComponent,
    ProductListComponent,
    ProductsTableFotterComponent,
    CreateProductComponent,
    ProductsTableComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductManagmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...materialModules
  ],
  exports: [ProductManagmentRoutingModule, ...materialModules],
  providers: [MyService]
})
export class ProductManagmentModule { }
