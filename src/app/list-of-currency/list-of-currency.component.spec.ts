import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCurrencyComponent } from './list-of-currency.component';

describe('ListOfCurrencyComponent', () => {
  let component: ListOfCurrencyComponent;
  let fixture: ComponentFixture<ListOfCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
