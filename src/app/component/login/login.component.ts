import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public form: FormGroup;
  public isLogin = false;
  private formSubmitAttempt: boolean;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.router.navigate(['/item']);
    }

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  public isFieldInvalid(field: string) {
     console.log((!this.form.get(field).valid && this.form.get(field).touched) ||
    (this.form.get(field).untouched && this.formSubmitAttempt))


    return (

      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)

      );
  }

 onSubmit() {
    try {
      if (this.form.valid) {
        this.isLogin = true;

       this.authService.login(this.form.value).subscribe(
          (data: any) => {
            alert('successfully logged in');
            this.isLogin = false;
            localStorage.setItem('isLoggedIn', 'true');
            this.router.navigate(['/item']);
          },
          (error) => {
            alert(error.error);
            this.isLogin = false;
          }
        );
      }
      this.formSubmitAttempt = true;

    } catch (e) {
      console.log("ssssssss")
      console.log(e);
    }
  }


}
