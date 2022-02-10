import { Injectable} from '@angular/core';
import { HttpClient, HttpClientModule, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { RequestCredential } from '../classes/requestcredential';
import { Globalconstants } from '../common/global/globalconstants';
import { ObservedValueOf } from 'rxjs';
import { Employee } from '../classes/employee';

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
    return this.http.post<RequestCredential>(url, body, httpOptions);
  }

  getEmployees(): Observable<Employee[]> {
    let url: string = Globalconstants.spiceApiEndpoint_employee; 
    let FullSessionToken = Globalconstants.Auth_GetSession_Token + ":" + localStorage.getItem('SpicaApi_Session_Token');
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': FullSessionToken
      })
    };
    return this.http.get<Employee[]>(url, httpOptions);
  }

  addEmployee(ime:string,priimek:string,email:string,maticna:string): Observable<Employee> {
    let url: string = Globalconstants.spiceApiEndpoint_employee; 
    let FullSessionToken = Globalconstants.Auth_GetSession_Token + ":" + localStorage.getItem('SpicaApi_Session_Token');
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': FullSessionToken
      })
    };

    const body ={
      
        "LastName": `${ime}`,
        "FirstName": `${priimek}`,
        "MiddleName": "empty",
        "City": "empty",
        "Phone": "00000",
        "Address": "empty",
        "State": "empty",
        "Fax": "00000",
        "ReferenceId": "00000",
        "Birth": "1.1.2000 0:00:00",
        "WorkingSchemeType": 2,
        "Occupation": "President",
        "Unit3": "Unit3",
        "Unit2": "Unit2",
        "Unit1": "Unit1",
        "Email": `${email}`,
        "Other": "empty",
        "MobilePhone": "00000",
        "OrganizationalUnitId": 10000000,
        "AdditionalField1": `${maticna}`,
        "AdditionalField2": "Note 2",
        "AdditionalField3": "Note 3",
        "AdditionalField4": "Note 4",
        "AdditionalField5": "Note 5",
        "AdditionalField6": "Note 6",
        "AdditionalField7": "Note 7",
        "AdditionalField8": "Note 8",
        "AdditionalField9": "Note 9",
        "AdditionalField10": "Note 10",
        "Active": true,
        "CurrentWorkingSchemeId": null
        
    };

    return this.http.put<Employee>(url, body, httpOptions);
  }



}