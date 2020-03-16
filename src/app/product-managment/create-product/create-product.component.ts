import { Component, OnInit, Injectable } from '@angular/core';
import { MyService } from '../product.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})

@Injectable()
export class CreateProductComponent implements OnInit {
  // public
  public productFormGroup: FormGroup;
  public selectedCategory;
  public removeXCategory;
  public categories: Array<{category: string, selected: boolean, position: number}> = [
    { category: 'computer', selected: false, position: 0 },
    { category: 'music', selected: false, position: 1 },
    { category: 'games', selected: false, position: 2 },
    { category: 'joys', selected: false, position: 3 }
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
    saveModel.id = Math.random();
    this.myService.saveProduct(saveModel);
    // }
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
