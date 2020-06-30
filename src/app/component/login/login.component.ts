import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor() { }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  ngOnInit(): void {
  }

}
