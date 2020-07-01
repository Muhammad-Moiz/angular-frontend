import { Injectable } from '@angular/core';


import { baseURL } from '../../shared/baseurl';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../shared/user'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  public loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  headers = new HttpHeaders({
    'x-access-token': localStorage.getItem('token')
  });

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  login(user: User) {
    if (user.email !== '' && user.password !== '') {
      return this.http.post(baseURL + 'user/login/', {
        email: user.email,
        password: user.password
      }
      );
    }
  }

}
