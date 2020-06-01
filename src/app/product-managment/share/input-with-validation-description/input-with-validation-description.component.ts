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
export class InputWithValidationDescriptionComponent implements ControlValueAccessor {
  public initialValue: string;
  constructor(private control: NgControl) {
    control.valueAccessor = this;
  }
  onTouched = (): void => {};
  onChange = (value: string) => { };

  writeValue(initialValue: string): void {
    this.initialValue = initialValue ? initialValue : '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  public onValueChange(value: string): void {
    this.onChange(value);
    this.onTouched();
  }
}
