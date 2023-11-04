import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table'
import { AppService } from 'src/app/app.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];

  dataSource: any = new MatTableDataSource([]);


  constructor(
    private appService: AppService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) {}


  ngOnInit() {
    this.register()
  }


  register() {

    this.appService.getUsersList().subscribe((res:any)=>{
      console.log(res?.data,"responseaa");
      this.dataSource.data = res?.data
    })
    
  }

  editUser(index: any,element: any) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '500px',
      height:  '500px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.register();
    });
  }

  deleteUser(index: any,element: any) {
    this.dataSource.data.splice(index,1)
    this.dataSource.data = this.dataSource.data

    this.snackbar.open("Deleted Successfully", "", {
      duration: 2000,
    });
  }

}
