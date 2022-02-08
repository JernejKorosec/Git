import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { RequestCredential } from '../classes/requestcredential';
import { Globalconstants } from '../common/global/globalconstants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  /*
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
*/
  requestSessionToken(): Observable<RequestCredential> {
    let url: string = Globalconstants.spiceApiEndpoint_session; // url host and port is in proxy
    let GetSessionToken = Globalconstants.Auth_GetSession_Token;
    let body: string = `{ "Username": "demo", "Password": "demo", "Sid": ""}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': GetSessionToken
      })
    };
    //TokenTimeStamp: 2022-02-08T02:24:34.6026923+01:00
    let result = this.http.post<RequestCredential>(url, body, httpOptions);
    console.log(result);
    return result;
  }

}
