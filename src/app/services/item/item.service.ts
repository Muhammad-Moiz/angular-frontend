import { Injectable } from '@angular/core';


import { Item } from '../../shared/item';

import { ELEMENT_DATA } from '../../shared/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Item [] {
    return ELEMENT_DATA;
  }

}
