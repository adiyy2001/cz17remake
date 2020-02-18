import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RatesTableApiModel } from "./nbp-rates-api.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbpApiService {

  constructor(private httpClient: HttpClient) { }

  public getCurrency(): Observable<RatesTableApiModel[]> {
    const url = `https://api.nbp.pl/api/exchangerates/tables/b?format=json`;
    return this.httpClient.get<RatesTableApiModel[]>(url);
  }

  public getSelectedCurrency(elem: string, tableNr: number): Observable<RatesTableApiModel[]> {
    const url = `https://api.nbp.pl/api/exchangerates/rates/b/${elem.toLowerCase()}/last/${tableNr}/?format=json`;
    return this.httpClient.get<RatesTableApiModel[]>(url);
  }
}
