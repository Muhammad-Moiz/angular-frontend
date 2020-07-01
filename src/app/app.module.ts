import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,   ReactiveFormsModule } from '@angular/forms';
 import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';


import {ItemService} from './services/item/item.service';
import { HttpClientModule } from '@angular/common/http';

import { baseURL } from './shared/baseurl';
import { LoginComponent } from './component/login/login.component';
import { ItemComponent } from './component/item/item.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { DialogComponent } from './component/dialog/dialog.component';
import {MatIconModule} from '@angular/material/icon';
 import {MatDialogModule} from '@angular/material/dialog';

 const routes = [
  { path: 'item',  component: ItemComponent },
  { path: '',     component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemComponent,
    HeaderComponent,
    DialogComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot(routes)
    ],
  providers: [
    ItemService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
