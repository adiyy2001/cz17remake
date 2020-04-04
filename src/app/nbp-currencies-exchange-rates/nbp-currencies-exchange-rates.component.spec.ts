import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbpCurrenciesExchangeRatesComponent } from './nbp-currencies-exchange-rates.component';

describe('NbpCurrenciesExchangeRatesComponent', () => {
  let component: NbpCurrenciesExchangeRatesComponent;
  let fixture: ComponentFixture<NbpCurrenciesExchangeRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbpCurrenciesExchangeRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbpCurrenciesExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
