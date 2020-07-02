import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService } from '../../services/item/item.service'
import { Item } from '../../shared/item'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    private ItemService: ItemService,
    private router: Router,
    ) { }
  dataSource: Item[];

  ngOnInit() {
    this.ItemService.getItems().subscribe(
      (data: any) => {
        this.dataSource = data as Item[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/']);
  }

  displayedColumns: string[] = ['Position', 'Task', 'Status', 'Actions'];

  update(id: any) {

    this.ItemService.updateItem(id).subscribe(
      (data: any) => {
        this.ngOnInit();
      },
      (error) => {
        this.ngOnInit();
      }
    );

  }

  delete(id: any) {

    this.ItemService.deleteItem(id).subscribe(
      (data: any) => {
        this.ngOnInit();
      },
      (error) => {
        this.ngOnInit();
      }
    );

  }

}
