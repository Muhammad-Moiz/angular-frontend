import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ItemService } from './services/item/item.service'
import { Item } from './shared/item'
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public form: FormGroup;
  dataSource: Item[];

  constructor(private ItemService: ItemService, router: Router) {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      router.navigate(['/item']);
    }else{
      router.navigate(['/']);
    }
   }

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

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

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
