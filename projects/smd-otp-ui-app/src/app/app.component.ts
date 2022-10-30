import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smd-otp-ui-app';
  otp:any = ''
  recievedOTP(eve:any){
    console.log("app",eve)
    this.otp = eve
  }
}
