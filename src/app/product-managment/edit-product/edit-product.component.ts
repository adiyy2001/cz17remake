import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  private productFormGroup: FormGroup;
  constructor(private service: MyService, private formBuilder: FormBuilder) {
    this.productFormGroup = formBuilder.group({
      name: ['', Validators.required],
      tags: formBuilder.array([], Validators.required),
      categories: formBuilder.array([], Validators.required),
      description: ['', Validators.required]
    });

    service.getSavedProducts().subscribe((last => console.log(last)));
  }

  ngOnInit() {
  }

}
