import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


import { Item } from '../../shared/item'

import { ItemService } from '../../services/item/item.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  task: string;
  constructor(
    private ItemService: ItemService,
    private router: Router,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.router.navigate(['/item']);

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { task: this.task }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.task = result;
      this.ItemService.insertItem(this.task).subscribe(
        (data: any) => {
           console.log("success")
           window.location.reload();

          },
        (error) => {
             console.log(error);
        })
    });
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/']);
  }
}
