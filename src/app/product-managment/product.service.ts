import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from './create-product/product.model';

@Injectable()
export class MyService {

  // Replay Subject = odtwarza wszystke dane które przez nie go przeszły
  // Beheviour Subject = zwraca ostatni element
  // Subject = na "bieżaco"

  private products: ProductModel[];
  private categories: Array<{ category: string, selected: boolean, position: number }> = [
    { category: 'computer', selected: false, position: 0 },
    { category: 'music', selected: false, position: 1 },
    { category: 'games', selected: false, position: 2 },
    { category: 'joys', selected: false, position: 3 }
  ];
  constructor() {
    this.products = [];
  }

  public getCategories(){
    return of(this.categories);
  }

  public addCategory(selectedCategory){
    this.categories[selectedCategory].selected = true;
  }

  public removeCategory(index) {
    this.categories[index].selected = false;
  }

  public saveProduct(product: ProductModel): Observable<number> {
    const nexId = this.products.length + 1;
    product.id = nexId;
    this.products.push(product);

    return of(nexId);
  }

  public getProducts(pageSize: number = 5, pageIndex: number = 0): Observable<PaginatedList<ProductModel>> {
    const indexOfFirstElementOnPage = pageSize * pageIndex;
    const lastOfLastElementOnPage = indexOfFirstElementOnPage + pageSize;

    const productsPage = this.products.sort(c => c.id).slice(indexOfFirstElementOnPage, lastOfLastElementOnPage)
    return of(new PaginatedList(productsPage, this.products.length, pageSize))
  }

  public getProduct(productId: number): Observable<ProductModel> {
    const product = this.products.find(p => p.id === productId);
    if (!product) {
      throw new Error('Product with given id not found');
    }

    return of(product);
  }

  public deleteProduct(productId: number): Observable<boolean> {
    const productToDelete = this.products.find(product => product.id === productId)

    if (!productToDelete) {
      throw new Error('Product with given id not found');
    }

    const indexOfProductToDelete = this.products.indexOf(productToDelete);
    this.products.splice(indexOfProductToDelete, 1);
    return of(true);
  }

  public editProduct(product: ProductModel): Observable<boolean> {
    const productToEdit = this.products.find( product => product.id === product.id)
    productToEdit.name = product.name;
    productToEdit.categories = product.categories;
    productToEdit.tags = product.tags;
    productToEdit.description = product.description;
    return of(true)
  }
}

export class PaginatedList<T> {
  public items: T[];
  public count: number;
  public pagesize: number;

  constructor(items: T[], count: number, pageSize: number) {
    this.items = items;
    this.count = count;
    this.pagesize = pageSize;
  }
}
