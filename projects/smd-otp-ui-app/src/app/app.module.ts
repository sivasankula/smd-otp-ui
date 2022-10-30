import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { SmdOtpUiModule } from 'smd-otp-ui';
import { SmdOtpUiModule } from 'projects/smd-otp-ui/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SmdOtpUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
