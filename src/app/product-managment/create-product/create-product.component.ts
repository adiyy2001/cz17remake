import { Component, OnInit, Injectable } from '@angular/core';
import { MyService } from '../product.service';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
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
  public categories: Array<{ category: string, selected: boolean, position: number }> = [
    { category: 'computer', selected: false, position: 0 },
    { category: 'music', selected: false, position: 1 },
    { category: 'games', selected: false, position: 2 },
    { category: 'joys', selected: false, position: 3 }
  ];

  public constructor(
    private formBuilder: FormBuilder,
    private myService: MyService) {
    this.productFormGroup = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      tags: formBuilder.array([], ),
      categories: formBuilder.array([], Validators.required),
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  public submitProduct(): void {

    // check if group of controls return true
    if (this.productFormGroup.valid) {
    const saveModel = new ProductModel();
    const name: AbstractControl = this.productFormGroup.controls.name
    name.patchValue(name.value[0].toUpperCase() + name.value.slice(1));
    saveModel.name = this.productFormGroup.controls.name.value;
    saveModel.description = this.productFormGroup.controls.description.value;
    saveModel.categories = this.categories
      .filter(c => c.selected)
      .map(c => c.category);
    // saveModel.categories = this.productFormGroup.controls.categories.value;
    saveModel.tags = this.productFormGroup.controls.tags.value;
    this.myService.saveProduct(saveModel).subscribe();
    }
  }

  public addtag(): void {
    const tags = this.productFormGroup.controls.tags as FormArray;
    tags.push(this.formBuilder.control(''));
  }

  pickCategory(selectedCategory: number): void {
    this.categories[selectedCategory].selected = true;
    const tags = this.productFormGroup.controls.categories as FormArray;
    tags.push(this.formBuilder.control(this.categories[selectedCategory].category));
  }

  removeCategory(index: number): void {
    this.categories[index].selected = false;
  }
}
