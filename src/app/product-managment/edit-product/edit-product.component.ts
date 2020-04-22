import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { MyService } from '../product.service';
import { ProductModel } from '../create-product/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  // public
  public removeXCategory: number;
  public productFormGroup: FormGroup;
  public intersection: string[];
  // private
  private valueOfProduct: ProductModel;

  // select options and config
  public categories: Array<{ category: string, selected: boolean, position: number }> = [
    { category: 'computer', selected: false, position: 0 },
    { category: 'music', selected: false, position: 1 },
    { category: 'games', selected: false, position: 2 },
    { category: 'joys', selected: false, position: 3 }
  ];

  constructor(private service: MyService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    this.productFormGroup = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)], Validators.pattern('[a-zA-Z0-9 ]')],
      tags: formBuilder.array([]),
      categories: formBuilder.array([], Validators.required),
      description: ['', Validators.required, Validators.maxLength(75), Validators.toString()],
    });
  }

  ngOnInit() {
    this.service
      .getProduct(this.getProductId())
      .subscribe((product => {
        this.valueOfProduct = product;
        this.pathFormControls(this.valueOfProduct);
      }));
  }

  public addtag(): void {
    const tags = this.productFormGroup.controls.tags as FormArray;
    tags.push(this.formBuilder.control(''));
  }

  public pickCategory(selectedCategory: number, category: string): void {
    // reset/update array of possible categories
    this.categories[selectedCategory].selected = true;
    this.intersection = [...this.intersection];
    this.intersection.splice(selectedCategory, 1);

    // remove from selected array
    this.productFormGroup.controls.categories.value.splice(selectedCategory, 0, category);
  }

  public removeCategory(removeXCategory: number, selectedCategory: string): void {
    this.productFormGroup.controls.categories.value.splice(removeXCategory, 1);
    this.intersection = [...this.intersection, selectedCategory];
  }

  public submitProduct(): void {
    if (this.productFormGroup.valid) {
      const saveModel = new ProductModel();
      const name: AbstractControl = this.productFormGroup.controls.name;

      this.getFirstLetterToUpperCase(name);
      saveModel.name = this.productFormGroup.controls.name.value;
      saveModel.description = this.productFormGroup.controls.description.value;
      saveModel.categories = this.productFormGroup.controls.categories.value;
      saveModel.tags = this.productFormGroup.controls.tags.value;
      this.service
        .editProduct(saveModel)
        .subscribe(_ => { })
    }
  }

  private getProductId(): number {
    // konwersja na numer ponieważ url zawsze zwraca string
    const productId = Number(this.route.snapshot.params.id);
    return productId;
  }

  private pathFormControls(valueOfProduct: {name: string, tags: string[], categories: string[], description: string}): void {
    const { name, tags, categories, description } = valueOfProduct;
    this.productFormGroup.controls.name.patchValue(name);

    const tagsFormArray = this.productFormGroup.controls.tags as FormArray;
    tags.forEach(element => {
      tagsFormArray.push(this.formBuilder.control(element));
    });

    const categoriesFormArray = this.productFormGroup.controls.categories as FormArray;
    categories.forEach(element => {
      categoriesFormArray.push(this.formBuilder.control(element));
    });

    this.intersection = this.categories.map(x => x.category).filter(c => !this.productFormGroup.controls.categories.value.includes(c));
    this.productFormGroup.controls.description.patchValue(description);
  }

  private getFirstLetterToUpperCase = (name: AbstractControl) => name.patchValue(name.value[0].toUpperCase() + name.value.slice(1));
}
