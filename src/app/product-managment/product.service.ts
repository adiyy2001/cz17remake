import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class MyService {
    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();

    constructor() {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

    myMethod(data) {
        console.log(data); // I have data! Let's return it so subscribers can use it!
        // we can do stuff with data if we want
        this.myMethodSubject.next(data);
    }
}