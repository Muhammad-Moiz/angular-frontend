import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';


import { Item } from '../../shared/item';

import { ELEMENT_DATA } from '../../shared/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(baseURL + 'item/');
  }
updateItem(id:any){
  console.log("sadid_ ",id)
  return this.http.get(baseURL + 'item/markDone/' + id);
}

}
