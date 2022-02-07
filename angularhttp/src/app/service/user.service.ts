import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
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
    let myParams = new HttpParams().set('page','5').set('sort','true');
    myParams = myParams.append('name','junior');
    myParams = myParams.append('name','john');
    return this.http.get<User []>(`${this.apiUrl}/users`, {params: myParams});

    //let myHeaders = new HttpHeaders({'myheader' : 'headerValue'});
    //myHeaders = myHeaders.append('','');
    //myHeaders = myHeaders.set('id','1234');
    //return this.http.get<User []>(`${this.apiUrl}/users`, {headers: myHeaders});
    //return this.http.get<User []>(`${this.apiUrl}/users`);
  }

  /*
  getUsers(): Observable < User[] > {
    let myHeaders = new HttpHeaders({'myheader' : 'headerValue'})
    myHeaders = myHeaders.set('id','1234');
    return this.http.get<User []>(`${this.apiUrl}/users`, {headers: myHeaders});
    //return this.http.get<User []>(`${this.apiUrl}/users`);
  }
*/

  /*
  getUsers(): Observable < User[] > {
    return this.http.get<User []>(`${this.apiUrl}/users`);
  }
  */

  getUser(): Observable < User > {
    return this.http.get<User >(`${this.apiUrl}/users/1`);
  }
  // http://jsonplaceholder.typicode.com
  createUser(user: User): Observable < User > {
    return this.http.post<User>(`${this.apiUrl}/users`,user);
  }

  updateUser(user: User): Observable < User > {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`,user);
  }

  patchUser(user: User): Observable < User > {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`,user);
  }

  deleteUser(id: number): Observable < void > {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }
}