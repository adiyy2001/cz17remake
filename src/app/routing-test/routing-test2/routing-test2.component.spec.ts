import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTest2Component } from './routing-test2.component';

describe('RoutingTest2Component', () => {
  let component: RoutingTest2Component;
  let fixture: ComponentFixture<RoutingTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
