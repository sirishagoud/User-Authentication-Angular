import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl("", [Validators.required, Validators.email]),
    password: new UntypedFormControl("", [Validators.required])
  })

  constructor(
    private appService: AppService,
  ) {}


  ngOnInit() {

  }

  login() {
    console.log("abced", this.loginFormGroup.value);

    this.appService.loginUser(this.loginFormGroup.value).subscribe((res)=>{
      console.log(res,"responseaa");
      
    })
    
  }
  
}
