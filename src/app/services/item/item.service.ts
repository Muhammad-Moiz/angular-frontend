import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(baseURL + 'item/');
  }
  updateItem(id: any) {
    return this.http.get(baseURL + 'item/markDone/' + id);
  }

  deleteItem(id: any) {
    return this.http.get(baseURL + 'item/delete/' + id);
  }

  insertItem(Task: any) {
    return this.http.post(baseURL + 'item/insert/', {
      task: Task
    });
  }

}
