import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interface/user';

@Injectable({ providedIn: 'root' })
export class UserService {

  /*
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://api.com/users');
  }
*/

  constructor(private http: HttpClient) {}
  
  getUsers(): Observable < User[] > {
    return this.http.get<User []>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(): Observable < User > {
    return this.http.get<User >('https://jsonplaceholder.typicode.com/users/1');
  }

  
}