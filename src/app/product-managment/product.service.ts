import { Injectable } from '@angular/core';
import { Observable, Subject, of, ReplaySubject } from 'rxjs';
import { ProductModel } from './create-product/product.model';


@Injectable()
export class MyService {

    // Replay Subjec = odtwarza wszystke dane które przez nie go przeszły
    // Beheviour Subjec = zwraca ostatni element
    // Subject = na "bieżaco"



    private subject: ReplaySubject<any>;
    private savedProducts: ProductModel[];

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
}