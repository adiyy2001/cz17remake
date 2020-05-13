import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-with-validation-description',
  templateUrl: './input-with-validation-description.component.html',
  styleUrls: ['./input-with-validation-description.component.scss'],
  //   providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => InputWithValidationDescriptionComponent),
  //     multi: true
  //   }
  // ]
})
export class InputWithValidationDescriptionComponent implements OnInit, ControlValueAccessor {
  public initialValue: string;
  constructor(private control: NgControl) {
    control.valueAccessor = this;
  }
  onTouched = (): void => {};
  onChange = () => {};

  writeValue(initialValue: string): void {
    this.initialValue = initialValue ? initialValue : '';
  }
  registerOnChange(fn: any): void {
    this.onTouched = fn;
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit(): void {
  }

}
