import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    email: new FormControl('email'),
    password: new FormControl('password'),
  });

}
