import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RatesTableApiModel  } from "./apimodel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  currency: any;
  url = `https://api.nbp.pl/api/exchangerates/tables/b?format=json`;
  // use method get
  public getCurrency(): Observable<RatesTableApiModel[]> {
    return this.httpClient.get <RatesTableApiModel[]>(this.url);
  }
  constructor(private httpClient: HttpClient) {}
}
