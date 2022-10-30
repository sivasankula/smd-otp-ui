import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SmdOtpUiComponent } from './smd-otp-ui.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { NextFocusDirective } from './next-focus.directive';


@NgModule({
  declarations: [
    SmdOtpUiComponent,
    NumbersOnlyDirective,
    NextFocusDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    SmdOtpUiComponent,
  ]
})
export class SmdOtpUiModule { }
