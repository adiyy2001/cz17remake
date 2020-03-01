import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductModel } from './product.model';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
@Injectable()
export class CreateProductComponent implements OnInit {
  newSubject = new Subject<ProductModel>();
  public constructor(private MyService) {}


  ngOnInit() {
  }

  submitProduct(formData: ProductModel) {
    this.MyService.MyMethod(this.newSubject.next(formData));
  }

    // submitProduct(formData: ProductModel): void {
    //   this.MyService.MyMethod(formData);
    // }
}
