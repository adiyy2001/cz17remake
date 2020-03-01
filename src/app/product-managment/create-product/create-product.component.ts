import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MyService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
@Injectable()
export class CreateProductComponent {

  public allCategories = ['Laptopy', 'Klawiatury'];
  public productFormGroup: FormGroup;

  public get avilablecategories(): string[] {
    return this.allCategories
      .filter(category => !this.selectedCategories.controls.map(c => c.value).includes(category));
  }

  public get showTagError(): boolean {
    const tags = this.productFormGroup.get('tags');
    return tags.errors && tags.errors.required && tags.touched;
  }

  public get showNameError(): boolean {
    const name = this.productFormGroup.get('name');
    return name.errors && name.errors.required && name.touched;
  }

  public constructor(
    private productsService: MyService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.resetForm();
  }

  public get selectedTags(): FormArray {
    return this.productFormGroup.get('tags') as FormArray;
  }

  public addTag(): void {
    this.productFormGroup.get('tags').markAsTouched();
    this.selectedTags.push(this.formBuilder.control(''));
  }

  public removeTag(indexToRemove: number): void {
    this.selectedTags.removeAt(indexToRemove);
  }

  public get selectedCategories(): FormArray {
    return this.productFormGroup.get('categories') as FormArray;
  }

  public addCategory(value: string): void {
    this.selectedCategories.push(this.formBuilder.control(value));
  }

  public removeCategory(indexToRemove: number): void {
    this.selectedCategories.removeAt(indexToRemove);
  }

  public submitProduct(): void {
    if (!this.productFormGroup.valid) {
      this.productFormGroup.markAllAsTouched();
      return;
    }

    this.productsService.saveProduct(this.productFormGroup.value);
    this.router.navigate(['product-managment/list']);
  }

  public resetForm(): void {
    this.productFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      tags: this.formBuilder.array([], Validators.required),
      categories: this.formBuilder.array([], Validators.required),
      description: ['', Validators.maxLength(500)],
    });
  }
}
