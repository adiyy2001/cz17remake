import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTest1Component } from './routing-test1.component';

describe('RoutingTest1Component', () => {
  let component: RoutingTest1Component;
  let fixture: ComponentFixture<RoutingTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
