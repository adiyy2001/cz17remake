import { Component, OnInit, Injectable } from '@angular/core';
import { MyService } from '../../product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
@Injectable()
export class ProductsTableComponent implements OnInit {
  public data: Array<any> = [5, 4, 23, 2];

    public constructor(private myService: MyService) {
      this.myService.myMethod$.subscribe( data => {
        this.data.push(data);
        console.log(this.data);
        console.log(data);
      });
    }

  ngOnInit() {
  }

}
