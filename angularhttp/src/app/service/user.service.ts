import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

  private apiUrl = environment.apiUrl;

  /*
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://api.com/users');
  }
*/

  constructor(private http: HttpClient) {}

  getUsers(): Observable < User[] > {
    return this.http.get<User []>(this.apiUrl+'users');
  }

  getUser(): Observable < User > {
    return this.http.get<User >(this.apiUrl+'users/1');
  }

  
}