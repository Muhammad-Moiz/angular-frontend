import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ItemService } from './services/item/item.service'
import { Item } from './shared/item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public form: FormGroup;
  dataSource: Item[];

  constructor(private ItemService: ItemService) { }

  ngOnInit() {
    this.dataSource = this.ItemService.getItems();
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  displayedColumns: string[] = ['Position', 'Task', 'Status', 'Actions'];

}
