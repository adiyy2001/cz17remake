import { Component, OnInit, forwardRef, Optional, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInput } from '@angular/material/input';

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
export class InputWithValidationComponent implements ControlValueAccessor {

  @ViewChild(MatInput) private matInputReference: MatInput;

  public disabled;
  public initialValue: string;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      ngControl.valueAccessor = this;
    }
  }

  public readonly errorStateMatcher: ErrorStateMatcher = {
      isErrorState: (ctrl: FormControl) => {
        return  !this.ngControl.valid;
    }
  }

  onChange = (value: string) => { };
  onTouched = () => { };

  //  trigger on start with initial value
  writeValue(initialValue: string): void {
    this.initialValue = initialValue ? initialValue : '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onValueChange(value: string): void {
    this.onChange(value);
    this.onTouched();
    this.matInputReference.updateErrorState();
  }

  public displayError(error: string): boolean {
    return this.hasError(error) && this.isTouched();
  }

  private hasError(error: string): boolean {
    return this.ngControl.hasError(error);
  }

  private isTouched(): boolean {
    return this.ngControl.touched;
  }
}