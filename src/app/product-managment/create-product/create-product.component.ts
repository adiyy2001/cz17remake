import { Component, Injectable } from '@angular/core';
import { MyService } from '../product.service';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ProductModel } from './product.model';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})

@Injectable()
export class CreateProductComponent {
  public productFormGroup: FormGroup;
  public categories: Array<{ category: string, selected: boolean, position: number }> = [
    { category: 'computer', selected: false, position: 0 },
    { category: 'music', selected: false, position: 1 },
    { category: 'games', selected: false, position: 2 },
    { category: 'joys', selected: false, position: 3 }
  ];
  successPopUp(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  alert() {
    const alt = 'one of tags is empty';
    return alt
  }
  public constructor(
    private _bottomSheet: MatBottomSheet,
    private formBuilder: FormBuilder,
    private myService: MyService) {
    this.productFormGroup = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      tags: formBuilder.array([]),
      categories: formBuilder.array([], Validators.required),
      description: ['', Validators.required],
    });
  }


  public submitProduct(): void {
    if (this.productFormGroup.valid) {
      const saveModel = new ProductModel();
      const name: AbstractControl = this.productFormGroup.controls.name

      this.getFirstLetterToUpperCase(name);
      saveModel.name = this.productFormGroup.controls.name.value;
      saveModel.description = this.productFormGroup.controls.description.value;
      saveModel.categories = this.categories
        .filter(c => c.selected)
        .map(c => c.category);
      saveModel.tags = this.productFormGroup.controls.tags.value;

      this.productFormGroup.controls.tags.value.forEach(tag => {
        if (tag.trim() === '') return this.alert();
      })
      this.myService.saveProduct(saveModel).subscribe(() => {
        this.successPopUp()
        this.productFormGroup.reset();
      });
    }
  }

  private getFirstLetterToUpperCase = (name: AbstractControl) => name.patchValue(name.value[0].toUpperCase() + name.value.slice(1));

  public addtag(): void {
    const tags = this.productFormGroup.controls.tags as FormArray;
    tags.push(this.formBuilder.control(''));
  }

  public pickCategory(selectedCategory: number): void {
    this.categories[selectedCategory].selected = true;
    const tags = this.productFormGroup.controls.categories as FormArray;
    tags.push(this.formBuilder.control(this.categories[selectedCategory].category));
  }

  public removeCategory(index: number): void {
    this.categories[index].selected = false;
  }

}
