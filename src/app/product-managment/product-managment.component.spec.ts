import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagmentComponent } from './product-managment.component';

describe('ProductManagmentComponent', () => {
  let component: ProductManagmentComponent;
  let fixture: ComponentFixture<ProductManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
