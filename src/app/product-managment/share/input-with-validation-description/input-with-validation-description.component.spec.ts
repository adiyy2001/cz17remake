import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithValidationDescriptionComponent } from './input-with-validation-description.component';

describe('InputWithValidationDescriptionComponent', () => {
  let component: InputWithValidationDescriptionComponent;
  let fixture: ComponentFixture<InputWithValidationDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithValidationDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithValidationDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
