import { Component, OnInit, Injectable } from '@angular/core';
import { MyService } from '../product.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ProductModel } from './product.model';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
@Injectable()
export class CreateProductComponent implements OnInit {
  public productFormGroup: FormGroup;
  public selectedCategory;
  public categories: Array<any> = [
    { category: 'computer', selected: false },
    { category: 'music', selected: false },
    { category: 'games', selected: false },
    { category: 'joys', selected: false }
  ];

  public constructor(
    private formBuilder: FormBuilder,
    private myService: MyService) {
    this.productFormGroup = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      tags: formBuilder.array([], Validators.required),
      categories: formBuilder.array([]),
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  public submitProduct(): void {
    // check if group of controls return true
    // if (this.productFormGroup.valid) {
    const saveModel = new ProductModel();
    saveModel.name = this.productFormGroup.controls.name.value;
    saveModel.description = this.productFormGroup.controls.description.value;
    saveModel.categories = this.productFormGroup.controls.categories;
    saveModel.tags = this.productFormGroup.controls.tags.value;
    this.myService.saveProduct(saveModel);
    console.log(saveModel.categories);
    // }
  }

  public addtag(): void {
    const tags = this.productFormGroup.controls.tags as FormArray;
    tags.push(this.formBuilder.control(''));
  }

  pickCategory(evt): void {
    this.categories[evt.target.selectedIndex].selected = true;
  }

  removeCategory(evt): void {
    this.categories[evt].selected = false;
  }
}
