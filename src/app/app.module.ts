import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListOfCurrencyComponent } from './list-of-currency/list-of-currency.component';
import { SelectCurrencyComponent } from './select-currency/select-currency.component';
import { RecordsComponent } from './records/records.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListOfCurrencyComponent,
    SelectCurrencyComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
