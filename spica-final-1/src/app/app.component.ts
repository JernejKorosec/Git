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
    Globalconstants.ReLogin(() => this.onGetSession());
  }
  
  onGetSession() {
    console.log("onGetSession(): void");
    this.employeeService.requestSessionToken().subscribe(
      {
        next: (response) => {
          const jsonData = JSON.stringify(response.Token)
          localStorage.setItem('SpicaApi_Session_Token',jsonData);
          localStorage.setItem('SpicaApi_Session_Timestamp',new Date().toString());
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    );
  }

  onGetEmployee(): void {
    this.employeeService.getEmployees().subscribe(
      {
        next: (employeeList) => {
          
          //console.log(employeeList.toString());
          //console.log("Token je:" + response.Token);
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    )
  }
}