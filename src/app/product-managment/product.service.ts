import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { ProductModel } from './create-product/product.model';
import { ArrayType } from '@angular/compiler';


@Injectable()
export class MyService {

  // Replay Subject = odtwarza wszystke dane które przez nie go przeszły
  // Beheviour Subject = zwraca ostatni element
  // Subject = na "bieżaco"

  private subject: ReplaySubject<any>;
  private savedProducts: ProductModel[];
  public indexValue: string | number;

  constructor() {
    this.subject = new ReplaySubject<ProductModel>();
    this.savedProducts = [];
  }

  public saveProduct(product: ProductModel): void {
    this.savedProducts.push(product);
    this.subject.next(product);
  }

  public getLastAddedProduct(): Observable<ProductModel> {
    return this.subject.asObservable();
  }

  public getSavedProducts(): Observable<ProductModel[]> {
    return of(this.savedProducts);
  }

  public setIndexValue(evt) {
    this.indexValue = evt;
  }

  public getIndexValue() {
    return this.indexValue;
  }

  public deleteProduct(product): void {
    for(let i = 0; i < this.savedProducts.length; i++) {
      if(this.savedProducts[i].id === product.id){
        this.savedProducts.splice(i, 1);
      }
    }
  }
}
