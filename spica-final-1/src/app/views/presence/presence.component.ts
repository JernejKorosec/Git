import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/employee';
import { Globalconstants } from 'src/app/common/global/globalconstants';
import { SharedComponent } from 'src/app/common/global/shared/shared.component'
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})

export class PresenceComponent implements OnInit {
  dataAdapterPresence: any;
  columnsPresence: any;
  sourcePresence: any;

  onPresenceRefresh() {
    this.onGetEmployeesPresent();
   }

  constructor(private sc: SharedComponent, private employeeService: EmployeeService) {
    this.dataAdapterPresence = sc.dataAdapterPresence;
    this.columnsPresence = sc.columnsPresence;
    this.sourcePresence = sc.sourcepresence;
  }
  ngOnInit(): void {
    //this.onGetEmployee();
    this.onGetEmployeesPresent();

  }


  onGetEmployee(): Employee[] {
    Globalconstants.ReLogin(() => this.onGetSession());
    let result: Employee[] = [];
    this.employeeService.getEmployees().subscribe(
      {
        next: (employeeList) => {
          result = employeeList;
          this.sourcePresence.localdata = employeeList.map(employee => [employee.Id, employee.FirstName, employee.LastName, employee.Email, employee.AdditionalField1, employee.Active]);
          this.dataAdapterPresence = new jqx.dataAdapter(this.sourcePresence);
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    )
    return result;
  }

  onGetSession() {
    //console.log("onGetSession(): void");
    this.employeeService.requestSessionToken().subscribe(
      {
        next: (response) => {
          let jsonData = JSON.stringify(response.Token).slice(1, -1);
          localStorage.setItem('SpicaApi_Session_Token', jsonData);
          localStorage.setItem('SpicaApi_Session_Timestamp', new Date().toString());
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    );
  }


  
  onGetEmployeesPresent(): Employee[] {
    Globalconstants.ReLogin(() => this.onGetSession());
    let result: Employee[] = [];
    this.employeeService.getEmployeesPresent().subscribe(
      {
        next: (employeeList) => {
          result = employeeList;
          this.sourcePresence.localdata = employeeList.map(employee => [employee.Id, employee.FirstName, employee.LastName, employee.Email, employee.AdditionalField1, employee.Active]);
          this.dataAdapterPresence = new jqx.dataAdapter(this.sourcePresence);
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    )
    return result;
  }


}