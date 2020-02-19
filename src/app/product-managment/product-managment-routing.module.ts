import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductManagmentComponent } from './product-managment.component';

const routes: Routes = [{ path: '', component: ProductManagmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagmentRoutingModule { }
