import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyService } from '../product.service';
import { ProductModel } from '../create-product/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  public productFormGroup: FormGroup;
  valueOfProduct: ProductModel;
  indexValue = this.service.getIndexValue();
  constructor(private service: MyService, private formBuilder: FormBuilder) {
    this.productFormGroup = formBuilder.group({
      name: ['', Validators.required],
      tags: formBuilder.array([], Validators.required),
      categories: formBuilder.array([], Validators.required),
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
      this.service.getSavedProducts().subscribe((arrayOfProducts => {
        this.valueOfProduct = arrayOfProducts[this.indexValue];
        console.log(this.indexValue, arrayOfProducts[this.indexValue]);
      }));
  }
}
