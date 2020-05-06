import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-with-validation',
  templateUrl: './input-with-validation.component.html',
  styleUrls: ['./input-with-validation.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => InputWithValidationComponent),
  //     multi: true
  //   }
  // ]
})
export class InputWithValidationComponent implements OnInit, ControlValueAccessor {

  public disabled;
  public initialValue: string;

  public get hasError(): boolean {
    // console.log(this.control.hasError(error));
    return this.control.hasError('required');
  }

  public get touched(): boolean {
    return this.control.touched;
  }

  constructor(private control: NgControl) {
    control.valueAccessor = this
  }

  //  trigger o nstart with initial value
  writeValue(initialValue: string): void {
    this.initialValue = initialValue ? initialValue : '';
  }

  onChange = (value: string) => { };
  onTouched = () => { };

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

  // public onValueChange(evt) {

  //   console.log(evt);
  //   this.onChange(evt);
  // }

  public onBlur() {
    this.onTouched();
  }
}
