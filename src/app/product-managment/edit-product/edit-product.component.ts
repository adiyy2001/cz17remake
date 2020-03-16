import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MyService } from '../product.service';
import { ProductModel } from '../create-product/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  // public
  public selectedCategory;
  public removeXCategory;
  public productFormGroup: FormGroup;

  // private
  private valueOfProduct: ProductModel;
  private indexValue = this.service.getIndexValue();

  // select options and config
  public categories: Array<{category: string, selected: boolean, position: number}> = [
    { category: 'computer', selected: false, position: 0 },
    { category: 'music', selected: false, position: 1 },
    { category: 'games', selected: false, position: 2 },
    { category: 'joys', selected: false, position: 3 }
  ];

  constructor(private service: MyService, private formBuilder: FormBuilder) {
    this.productFormGroup = formBuilder.group({
      name: ['', Validators.required],
      tags: formBuilder.array([], Validators.required),
      categories: formBuilder.array([], Validators.required),
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.service
        .getSavedProducts()
        .subscribe((arrayOfProducts => {
      this.valueOfProduct = arrayOfProducts[this.indexValue];
    }));
  }

  public addtag(): void {
    const tags = this.productFormGroup.controls.tags as FormArray;
    tags.push(this.formBuilder.control(''));
  }

  pickCategory(evt, i): void {
    this.selectedCategory = i;
    this.categories[this.selectedCategory].selected = true;
  }

  removeCategory(evt): void {
    this.removeXCategory = evt;
    this.categories[evt].selected = false;
  }
}
