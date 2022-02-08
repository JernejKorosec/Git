import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Globalconstants } from './common/global/globalconstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Spica TimeAPI';


  
  constructor(private employeeService: EmployeeService) { }
  
  ngOnInit(): void {
    //this.onGetSession();
    //this.onGetEmployee();
    //this.testLocalStorage();
    //this.ReLogin();
   // Globalconstants.ReLogin(() => this.onGetSession());
   this.onGetEmployee();
  }
  
  onGetSession() {
    console.log("onGetSession(): void");
    this.employeeService.requestSessionToken().subscribe(
      {
        next: (response) => {
          let jsonData = JSON.stringify(response.Token).slice(1, -1);
          localStorage.setItem('SpicaApi_Session_Token',jsonData);
          localStorage.setItem('SpicaApi_Session_Timestamp',new Date().toString());
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    );
  }

  onGetEmployee(): void {
    Globalconstants.ReLogin(() => this.onGetSession()); // Neccesseary
    this.employeeService.getEmployees().subscribe(
      {
        next: (employeeList) => {
          console.table(employeeList);
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    )
  }
}