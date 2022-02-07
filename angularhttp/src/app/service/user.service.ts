import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interface/user';
import { environment } from 'src/environments/environment';
import { Form } from '@angular/forms';
import { Event } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {

  private apiUrl = environment.apiUrl;
  readonly moreParams = ['test','test2'];

  /*
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://api.com/users');
  }
*/

  constructor(private http: HttpClient) {}

  getUsers(): Observable <User[]> {
    return this.http.get<User []>(`${this.apiUrl}/users`);
  }
  /*
  getUsers(): Observable < HttpEvent<User[]>> {
    return this.http.get<User []>(`${this.apiUrl}/users`, 
    {observe: 'events', reportProgress:true });
  }
*/
  /*
  getUsers(): Observable < HttpEvent<User[]>> {
    return this.http.get<User []>(`${this.apiUrl}/users`, {observe: 'events'});
  }
  */
/*
  getUsers(): Observable < User[] > {
    const theParams = {['testList'] : this.moreParams};
    //let myParams = new HttpParams({fromObject: theParams});
    //let myParams = new HttpParams({fromObject: {['testList'] : this.moreParams}});
    let myParams = new HttpParams({fromString: 'name=Junior&id=58' });
    
    // let myParams = new HttpParams().set('page','5').set('sort','true');
    // myParams = myParams.append('name','junior');
    // myParams = myParams.append('name','john');
    
    return this.http.get<User []>(`${this.apiUrl}/users`, {params: myParams});

    //let myHeaders = new HttpHeaders({'myheader' : 'headerValue'});
    //myHeaders = myHeaders.append('','');
    //myHeaders = myHeaders.set('id','1234');
    //return this.http.get<User []>(`${this.apiUrl}/users`, {headers: myHeaders});
    //return this.http.get<User []>(`${this.apiUrl}/users`);
  }
*/
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

  
  /*
  uploadFiles(formData: FormData): Observable<ArrayBuffer> {
    return this.http.post<string[]>(
      `http//localhost:9000/file/upload`, 
      formData, 
      { observe: 'events', reportProgess: true }
    );
  }
  */
  uploadFiles2(formData: FormData): Observable<HttpEvent<any>> {
    return this.http.post<HttpEvent<any>>(
      `http//localhost:9000/file/upload`, 
      formData, 
      {
        reportProgress: true,
        responseType: 'json'
      });
  }


  uploadFiles(formData: FormData): Observable<HttpEvent<any>> { 
    let baseUrl = `http//localhost:9000/file/upload`;
    const req = new HttpRequest('POST', `${baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  

}
