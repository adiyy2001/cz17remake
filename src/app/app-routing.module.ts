import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ProductManagmentComponent } from './product-managment/product-managment.component';

const routes: Routes = [
  // moduł home jest Eager load w app-module
  { path: '', component: HomeComponent },

  // moduł NbpCurrenciesExchangeRatesModule jest lazy load
  {
    path: 'kursy-walut',
    loadChildren: () =>
      import('./nbp-currencies-exchange-rates/nbp-currencies-exchange-rates.module')
        .then(mod => mod.NbpCurrenciesExchangeRatesModule)
  },

  // moduł RoutingTestRoutingModule jest lazy load
  {
    path: 'test-routing',
    loadChildren: () =>
      import('./routing-test/routing-test.module')
        .then(mod => mod.RoutingTestModule)
  },

  // nieznalezione/błędne linki kieruja do home
  {
    path: 'product-managment',
    loadChildren: () =>
      import('./products-managment/product-managment.module')
        .then(mod => mod.ProductManagmentModule)
  },

  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        // preloadingStrategy: PreloadAllModules
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
