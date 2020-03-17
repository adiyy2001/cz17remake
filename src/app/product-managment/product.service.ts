import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { ProductModel } from './create-product/product.model';


@Injectable()
export class MyService {

  // Replay Subject = odtwarza wszystke dane które przez nie go przeszły
  // Beheviour Subject = zwraca ostatni element
  // Subject = na "bieżaco"

  private subject: ReplaySubject<any>;
  private savedProducts: ProductModel[];
  public indexValue: string | number;
  public newSubject;

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

  public deleteProduct(product): Observable<ProductModel[]> {
    for(let i = 0; i < this.savedProducts.length; i++) {
      if(this.savedProducts[i].id === product.id){
        this.savedProducts.splice(i, 1);
      }
    }
     this.newSubject = new ProductModel();
     this.newSubject = this.savedProducts;
     this.subject = this.newSubject;
    return of(this.savedProducts);
  }
}
