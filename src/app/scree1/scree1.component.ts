import { Component, OnInit } from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';
import { Screen2Component } from '../screen2/screen2.component';

@Component({
  selector: 'app-scree1',
  templateUrl: './scree1.component.html',
  styleUrls: ['./scree1.component.css']
})
export class Scree1Component implements OnInit {
  public changeText: boolean = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  btnAddNewClick() {
    const dialogRef = this.dialog.open(Screen2Component, {
      width: '300px',
      disableClose: true,
      hasBackdrop: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
}
