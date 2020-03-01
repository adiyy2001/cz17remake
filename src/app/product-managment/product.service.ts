import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductModel } from './create-product/product.model';


@Injectable()
export class MyService {
    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();

    constructor() {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

    myMethod(data: ProductModel) {
        this.myMethodSubject.next(data);
    }
}