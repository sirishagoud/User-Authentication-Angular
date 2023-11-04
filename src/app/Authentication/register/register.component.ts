import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl("", [Validators.required]),
    email: new UntypedFormControl("", [Validators.required, Validators.email]),
    password: new UntypedFormControl("", [Validators.required])
  })

  constructor(
    private appService: AppService,
  ) {}


  ngOnInit() {

  }

  register() {
    console.log("abced", this.registerFormGroup.value);

    this.appService.registerUser(this.registerFormGroup.value).subscribe((res)=>{
      console.log(res,"responseaa");
      
    })
    
  }
}
