import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  car: string;
}

@Component({
  selector: 'app-formorders',
  templateUrl: './formorders.component.html',
  styleUrls: ['./formorders.component.css']
})
export class FormordersComponent implements OnInit {
     
  car: string | undefined;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {car: this.car}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.car = result;
    });
  }


  ngOnInit(): void {
  }
}
@Component({
  selector: 'dialogformorders',
  templateUrl: 'dialogformorders.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

