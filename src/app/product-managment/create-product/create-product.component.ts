import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitProduct(data: NgForm) {
    console.log(data.value);
  }

}
