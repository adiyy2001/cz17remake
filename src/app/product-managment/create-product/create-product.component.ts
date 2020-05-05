import { Component, Injectable, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ProductModel } from './product.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { MyService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})

@Injectable()
export class CreateProductComponent implements OnInit {

  public constructor(
    private bottomSheet: MatBottomSheet,
    private formBuilder: FormBuilder,
    private myService: MyService) {
    this.productFormGroup = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      tags: formBuilder.array([]),
      categories: formBuilder.array([], Validators.required),
      description: ['', Validators.required],
    });
  }
  @Output() public checkPagination: EventEmitter<any> = new EventEmitter();
  public productFormGroup: FormGroup;
  private alt: string;
  public categories: string[];
  public selectedCategories: string[] = [];


  public successPopUp(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

  public alert(): string {
    return this.alt = 'one of tags is empty';
  }

  ngOnInit() {
    this.myService
      .getCategories()
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  public addtag(): void {
    const tags = this.productFormGroup.controls.tags as FormArray;
    tags.push(this.formBuilder.control(''));
  }

  public pickCategory(selectedCategory: string): void {
    this.selectedCategories.push(selectedCategory);
    this.categories = this.categories.filter(c => c !== selectedCategory);
  }
  public removeCategory(category: string): void {
    this.categories.push(category);
    this.selectedCategories = this.selectedCategories.filter(c => c !== category);



  }
  public removeTag(index: number): void {
    const tags = this.productFormGroup.controls.tags as FormArray;
    tags.removeAt(index);
  }

  public submitProduct(): void {
    // if (this.productFormGroup.valid) {
      const saveModel = new ProductModel();
      const name: AbstractControl = this.productFormGroup.controls.name;

      this.getFirstLetterToUpperCase(name);
      saveModel.name = this.productFormGroup.controls.name.value;
      saveModel.description = this.productFormGroup.controls.description.value;
      saveModel.categories = this.selectedCategories;
      saveModel.tags = this.productFormGroup.controls.tags.value;
      this.myService
        .saveProduct(saveModel)
        .subscribe(() => {
          this.successPopUp();
          // this.resetForm();
        });
    // }
  }

  public resetForm(): void {
    this.productFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(12)]],
      tags: this.formBuilder.array([]),
      categories: this.formBuilder.array([], Validators.required),
      description: ['', Validators.required],
    });
  }

  private getFirstLetterToUpperCase(name: AbstractControl): void {
    return name.patchValue(name.value[0].toUpperCase() + name.value.slice(1));
  }
}
