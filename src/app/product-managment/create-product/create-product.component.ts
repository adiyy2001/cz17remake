import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductModel } from './product.model';
import { MyService } from '../product.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
@Injectable()
export class CreateProductComponent implements OnInit {
  // newSubject = new Subject<ProductModel>();
  public constructor(private myService: MyService) {}


  ngOnInit() {
  }

  // submitProduct(formData: ProductModel) {
  //   this.newSubject.next(formData);
  // }

    submitProduct(formData): void {
      this.myService.myMethod(formData.value);
    }
}
