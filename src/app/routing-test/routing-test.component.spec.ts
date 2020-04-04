import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTestComponent } from './routing-test.component';

describe('RoutingTestComponent', () => {
  let component: RoutingTestComponent;
  let fixture: ComponentFixture<RoutingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
