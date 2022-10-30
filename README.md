
# Angular Otp UI template

![alt text](https://raw.githubusercontent.com/sivasankula19/smd-otp-ui/siva_dev/projects/smd-otp-ui/otp_animated_s.gif)

[![Npm Version](https://img.shields.io/badge/npm-v1.0.0-red.svg)(https://www.npmjs.com/package/smd-otp-ui)]

## Installation
```
npm install smd-otp-ui
```

### How to use

import the otp-ui module in the module file of the your component as below
```
import { NgModule } from '@angular/core';

import { NgOtpUIModule } from 'projects/ng-otp-ui/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgOtpUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Usage
use the selector `smd-otp-ui`

#### Input
use the lenght property `length="n"` to define the lenght of the otp number
<br> here `n` is the natural number which accepts number greater than or eqauls to 4
***
#### Otput
***
use the output property to access the form control values of the opt as `onInputChange` function
****
#### properties
****

*****
| Input decorator | Otput decorator                    |
| ------------- | ------------------------------ |
|   `length`    |    `onInputChange`  |
****
#### Example
*****
| Input | Otput                    |
| ------------- | ------------------------------ |
|   length= "4"    |    (onInputChange)= "recievedOTP($event)"   |
****
#### app.component.html
****
```
<div>
		<smd-otp-ui length="4" (onInputChange) = 'onRecievedOtp($event)'></smd-otp-ui>
</div>
```
****
#### app.component.ts
****
```javascript
	import { Component } from '@angular/core';

	@Component({
  		selector: 'app-root',
  		templateUrl: './app.component.html',
  		styleUrls: ['./app.component.scss']
	})
	export class AppComponent {
  		title = 'smd-otp-ui-app';
  		otp:any = ''
  		onRecievedOtp(eve:any){
    		console.log("app",eve)
    		this.otp = eve
  		}
	}

```




****
#### Description
****

```
		<smd-otp-ui length="6" (onInputChange) = 'onRecievedOtp($event)'></smd-otp-ui>
```

Its accept the input property of lenght and output property of onInputChange method 
<br>
Generally if you not provide the length it takes the default length as `4`
<br>
Use the `$event` for receiving the output which is entered to the otp input elements
<br>
`onInputChange` function takes the param $event and gives the output as array
<br>
Example
<br>
entered otp inputs to otp elemsts as 190684 its gives output as `[1, 9, 0, 6, 8, 4]`
<br>
its only emits the output when the total number of inputs are entered

#### Key words


  **keywords**: ["smd-otp-ui", angular-otp", "otp-ui-verify", "otp-check", "verify otp", "ng-otp form", "ng-otp-UI", "angular otp form", "angular otp validate", "validate otp"
  ]
}