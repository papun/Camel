import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient:HttpClient,private router: Router) { }
  jwtToken?: string;
  decodedToken?: { [key: string]: string };
  username1: string ='';

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setUserName(username: string): void {
    localStorage.setItem('username', username);
  }

  getUserName(): string | null {
    // return localStorage.getItem('username');
    return this.username1;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['login']);
  }

  login({ username, password }: any): Observable<any> {
    if (username === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      this.username1 = username;
      this.setUserName(username);
      return of({ name: 'Papun Sahoo', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
