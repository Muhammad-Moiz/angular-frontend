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
updateItem(id:any){
   return this.http.get(baseURL + 'item/markDone/' + id);
}

}
