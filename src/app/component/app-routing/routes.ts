import { Routes } from '@angular/router';

import { ItemComponent } from '../../component/item/item.component'
import { LoginComponent } from '../../component/login/login.component'



export const routes: Routes = [
  { path: 'item',  component: ItemComponent },
  { path: '',     component: LoginComponent },
 ];
