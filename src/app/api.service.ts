import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RatesTableApiModel } from "./apimodel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  private url: string = `https://api.nbp.pl/api/exchangerates/tables/b?format=json`;
  // use method get
  public getCurrency(): Observable<RatesTableApiModel[]> {
    return this.httpClient.get<RatesTableApiModel[]>(this.url);
  }

  private selectedUrl: string;

  public getSelectedCurrency(elem: string): Observable<RatesTableApiModel[]> {
    if (elem) {
      this.selectedUrl = `https://api.nbp.pl/api/exchangerates/rates/b/${elem.toLowerCase()}/last/10/?format=json`;
    }
    return this.httpClient.get<RatesTableApiModel[]>(this.selectedUrl);
  }

}
