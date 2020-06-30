import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item/item.service'
import { Item } from '../../shared/item'



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private ItemService: ItemService) { }
  dataSource: Item[];

  async ngOnInit() {
    this.ItemService.getItems().subscribe(
      (data: any) => {

        console.log('success', data)

        this.dataSource = data as Item[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  displayedColumns: string[] = ['Position', 'Task', 'Status', 'Actions'];

  update(id:any) {
    this.ItemService.updateItem(id).subscribe(
      (data: any) => {
        this.ngOnInit();
      },
      (error) => {
         this.ngOnInit();
      }
    );
  }


}
