import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'smd-otp-ui',
  templateUrl:'smd-otp-ui.component.html',
  styleUrls:['smd-otp-ui.component.scss']
})
export class SmdOtpUiComponent implements OnInit {
  @Input()
  length?: any

  @Output() onInputChange: EventEmitter<any> = new EventEmitter;
  
  otpLength:any
  otpForm!:FormGroup
  arr: any = []
  constructor() { }

  ngOnInit(): void {
    this.otpLength = (this.length > 3) ? this.length : 4;
    this.otpForm = new FormGroup({})
    for (let i = 0; i < this.otpLength; i++) {
      this.arr.push(this.getFormConntrol(i));
      this.otpForm.addControl(this.getFormConntrol(i), new FormControl('', Validators.required))
    }
  }

  getFormConntrol(index: number) {
    return `crtl${index}`;
  }

  otpEnteredKey(eve:any){
    if(eve.key !== 'Tab' || eve.key !== 'ArrowRight' || eve.key !== 'ArrowLeft' || eve.key !== 'Backspace'){
      const otpEntered:any = Object.values(this.otpForm.value)
      let newOtp = []
      for(let i = 0 ; i < otpEntered.length ; i++ ) {
        if(otpEntered[i] !== ''){
          newOtp.push(JSON.parse(otpEntered[i]))
        }
      }
      this.otpLength == newOtp.length ?  this.onInputChange.emit(newOtp) :  null
    }
  }
}
