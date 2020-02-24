import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';

import { ProductManagmentComponent } from './product-managment.component';

const routes: Routes = [
  { path: '', component: ProductManagmentComponent },
  { path: 'add-product', component: CreateProductComponent},
  { path: '', redirectTo: 'witam', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagmentRoutingModule { }
