import { Component, OnInit, Injectable, Input } from '@angular/core';
import { MyService } from '../../product.service';
import { ProductModel } from '../../create-product/product.model';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
@Injectable()

export class ProductsTableComponent implements OnInit {
  public constructor(private myService: MyService) {
    this.myService.getLastAddedProduct().subscribe(prd => {
      this.data.push(prd);
    });
  }
  @Input() public data: Array<ProductModel> = [
    {
      categories: 'any',
      description: 'string',
      name: 'string',
      tags: 'string'
    }
  ];


  //   // zapytać dlaczego tej metody nie ma i czm musiałem dodać do blueprint'a
  //   .subscribe(evt => {
  //     const td = evt.target.parentElement.parentElement;
  //     td.remove();
  //   });


  public ngOnInit(): void {
    const deleteItem: Observable<any> = fromEvent(document, 'click');

    deleteItem.subscribe(evt => {
      const valueOfBtn: string = evt.target.lastChild.data;
      if (valueOfBtn === 'Delete') {
        const tr = evt.target.parentElement.parentElement;
        // : HTMLTableRowElement
        tr.remove();
        this.data.splice(tr.dataset.index, 1);
      } else {
        const indexValue = evt.target.attributes['data-index'].textContent;
        this.myService.setIndexValue(indexValue);
      }
    });
  }

}
