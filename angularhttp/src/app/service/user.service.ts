import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interface/user';
import { environment } from 'src/environments/environment';
import { Form } from '@angular/forms';
import { Event } from '@angular/router';
import { RequestCredential } from '../interface/requestcredentials';

@Injectable({ providedIn: 'root' })
export class UserService {

  private apiUrl = environment.apiUrl;
  readonly moreParams = ['test', 'test2'];

  /*
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://api.com/users');
  }
*/

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
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

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`);
  }
  // http://jsonplaceholder.typicode.com
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
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

  // Spica testiranje   

  requestSessionToken(): Observable<any> {

    //let spicaUrl: string = "http://rdweb.spica.com:5213/timeapi/Session/GetSession";
    let spicaUrl: string = "/Session/GetSession";
    let spicaEndpoint1: string = "";
    //let fullUrl = spicaUrl + spicaEndpoint1;
    let fullUrl = spicaUrl;
    let headerValue1 = 'SpicaToken 87F262C4-7FA6-46D3-880D-2F7E15B4F204';

    let bodyValue1: string = `
      {
      "Username": "demo",
      "Password": "demo",
      "Sid": ""
      }`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': headerValue1
      })
    };
    //TokenTimeStamp: 2022-02-08T02:24:34.6026923+01:00
    //let result = this.http.post<void>(fullUrl, bodyValue1, httpOptions);
    let result = this.http.post<RequestCredentials>(fullUrl, bodyValue1, httpOptions);
    console.log(result);
    return result;

  }

  requestSessionToken2(): Observable<RequestCredential> {
    let spicaUrl: string = "/Session/GetSession";
    let spicaEndpoint1: string = "";
    let fullUrl = spicaUrl;
    let headerValue1 = 'SpicaToken 87F262C4-7FA6-46D3-880D-2F7E15B4F204';
    let bodyValue1: string = `
      {
      "Username": "demo",
      "Password": "demo",
      "Sid": ""
      }`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': headerValue1
      })
    };
    //TokenTimeStamp: 2022-02-08T02:24:34.6026923+01:00
    let result = this.http.post<RequestCredential>(fullUrl, bodyValue1, httpOptions);
    return result;
  }


}
