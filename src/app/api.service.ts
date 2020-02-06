import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  url = "https://api.nbp.pl/api/exchangerates/rates/a/chf/last/24/?format=json";
  API_KEY: string = this.url;
  // use method get
  public getCurrency() {
    return this.httpClient.get(this.url);
  }
  constructor(private httpClient: HttpClient) {}
}
