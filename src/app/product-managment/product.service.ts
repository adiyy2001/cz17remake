import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { ProductModel } from './create-product/product.model';

@Injectable()
export class MyService {

  // Replay Subject = odtwarza wszystke dane które przez nie go przeszły
  // Beheviour Subject = zwraca ostatni element
  // Subject = na "bieżaco"

  private products: ProductModel[];

  constructor() {
    this.products = [];
  }

  public saveProduct(product: ProductModel): Observable<number> {
    const nexId = this.products.length +1;
    product.id = nexId;
    this.products.push(product);
    console.log(this.products);
    return of(nexId);
  }

  public getProducts(): Observable<ProductModel[]> {
    return of(this.products);
  }

  public getProduct(productId: number): Observable<ProductModel> {
    const product = this.products.find(p => p.id === productId);
    if (!product) {
      throw new Error('Product with given id not found');
    }

    return of(product);
  }

  public deleteProduct(productId: number): Observable<boolean> {
    const productToDelete = this.products.find(product => product.id === productId)

    if (!productToDelete) {
      throw new Error('Product with given id not found');
    }

    const indexOfProductToDelete = this.products.indexOf(productToDelete);
    this.products.splice(indexOfProductToDelete, 1);
    return of(true);
  }
}
