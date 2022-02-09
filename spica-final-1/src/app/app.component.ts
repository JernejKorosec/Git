import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmployeeService } from './services/employee.service';
import { Globalconstants } from './common/global/globalconstants';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { Employee } from './classes/employee';
import { map, Observable } from 'rxjs';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Spica TimeAPI';
  
  source: any =
    {
      localdata: [],
      datafields:  
        [
          { name: 'Id', type: 'number', map: '0' },
          { name: 'LastName', type: 'string', map: '1' },
          { name: 'FirstName', type: 'string', map: '2' },
          /*{ name: 'MiddleName', type: 'string', map: '3' },
          { name: 'City', type: 'string', map: '4' },
          { name: 'Phone', type: 'string', map: '5' },
          { name: 'Address', type: 'string', map: '6' },
          { name: 'State', type: 'string', map: '7' },
          { name: 'Fax', type: 'string', map: '8' },
          { name: 'ReferenceId', type: 'string', map: '9' },
          { name: 'Birth', type: 'string', map: '10' },
          { name: 'WorkingSchemeType', type: 'number', map: '11' },
          { name: 'Occupation', type: 'string', map: '12' },
          { name: 'Unit3', type: 'string', map: '13' },
          { name: 'Unit2', type: 'string', map: '14' },
          { name: 'Unit1', type: 'string', map: '15' },
          */
          //{ name: 'Email', type: 'string', map: '16' },
          { name: 'Email', type: 'string', map: '3' },
          /*
          { name: 'Other', type: 'string', map: '17' },
          { name: 'MobilePhone', type: 'string', map: '18' },
          { name: 'OrganizationalUnitId', type: 'number', map: '19' },
          */
          //{ name: 'AdditionalField1', type: 'string', map: '20' },
          { name: 'AdditionalField1', type: 'string', map: '4' },
          /*
          { name: 'AdditionalField2', type: 'string', map: '20' },
          { name: 'AdditionalField3', type: 'string', map: '20' },
          { name: 'AdditionalField4', type: 'string', map: '20' },
          { name: 'AdditionalField5', type: 'string', map: '20' },
          { name: 'AdditionalField6', type: 'string', map: '20' },
          { name: 'AdditionalField7', type: 'string', map: '20' },
          { name: 'AdditionalField8', type: 'string', map: '20' },
          { name: 'AdditionalField9', type: 'string', map: '20' },
          { name: 'AdditionalField10', type: 'string', map: '20' },
          */
          //{ name: 'Active', type: 'boolean', map: '21' },
          { name: 'Active', type: 'boolean', map: '5' },
          /*
          { name: 'InternalField1', type: 'object', map: '22' },
          { name: 'InternalField2', type: 'object', map: '23' },
          { name: 'InternalField3', type: 'object', map: '24' },
          { name: 'InternalField4', type: 'object', map: '25' },
          { name: 'InternalField5', type: 'boolean', map: '26' },
          { name: 'CurrentWorkingSchemeId', type: 'number', map: '27' }*/
        ],
      datatype: 'array'
    };

  dataAdapter: any = new jqx.dataAdapter(this.source);


  columns: any[] = 
  
    [
      { text: 'ID', datafield: 'Id', width: 100 },
      { text: 'Ime', datafield: 'FirstName', width: 150 },      
      { text: 'Priimek', datafield: 'LastName', width: 150 },
      { text: 'Email', datafield: 'Email', width: 200 },
      { text: 'Matična', datafield: 'AdditionalField1', width: 100 },
      { text: 'Active', datafield: 'Active' }
      
    ];



  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    //this.onGetSession();
    this.onGetEmployee();
    //console.log(t);
    //this.testLocalStorage();
    //this.ReLogin();
    // Globalconstants.ReLogin(() => this.onGetSession());
    //this.source.localdata = this.onGetEmployee();
    //this.dataAdapter = new jqx.dataAdapter(this.source);
  }

  onGetSession() {
    console.log("onGetSession(): void");
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
  
  onGetEmployee(): Employee[] {
    Globalconstants.ReLogin(() => this.onGetSession()); 
    let result: Employee[] = [];
    this.employeeService.getEmployees().subscribe(
      {
        next: (employeeList) => {
          result = employeeList;
          this.source.localdata = employeeList.map(employee => [employee.Id, employee.FirstName, employee.LastName, employee.Email, employee.AdditionalField1, employee.Active]);
          this.dataAdapter = new jqx.dataAdapter(this.source);
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    )
    return result;
  }
}