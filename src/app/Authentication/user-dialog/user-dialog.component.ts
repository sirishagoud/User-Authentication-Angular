import { Component, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent {

  userEditFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl("", [Validators.required]),
    email: new UntypedFormControl("", [Validators.required, Validators.email]),
    password: new UntypedFormControl("", [Validators.required])
  })

  constructor(
    private appService: AppService,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}


  ngOnInit() {
console.log("abcdefghijkl", this.data);

  }

  register() {
    console.log("abced", this.userEditFormGroup.value);

    this.appService.addUser(this.userEditFormGroup.value).subscribe((res: any)=>{
      console.log(res,"responseaa");
      
    })
  }

  onClose(): void {
    this.dialogRef.close();
  }
  
}
