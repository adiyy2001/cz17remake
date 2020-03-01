import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { ProductModel } from './create-product/product.model';

@Injectable()
export class MyService {

    private subject: Subject<ProductModel>;
    private savedProducts: ProductModel[];

    constructor() {
        this.subject = new Subject<ProductModel>();
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
