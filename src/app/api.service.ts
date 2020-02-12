import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RatesTableApiModel } from "./apimodel";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private selectedUrl: string;

  constructor(private httpClient: HttpClient) { }

  private url: string = `https://api.nbp.pl/api/exchangerates/tables/b?format=json`;
  // use method get
  public getCurrency(): Observable<RatesTableApiModel[]> {
    return this.httpClient.get<RatesTableApiModel[]>(this.url);
  }


  public getSelectedCurrency(elem: string, tableNr: number): Observable<RatesTableApiModel[]> {
    if (elem) {
      console.log(elem);
      this.selectedUrl = `https://api.nbp.pl/api/exchangerates/rates/b/${elem.toLowerCase()}/last/${tableNr}/?format=json`;
    }
    return this.httpClient.get<RatesTableApiModel[]>(this.selectedUrl);
  }
}
