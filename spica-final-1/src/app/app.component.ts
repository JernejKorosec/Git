import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { EmployeeService } from './services/employee.service';
import { Globalconstants } from './common/global/globalconstants';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { Employee } from './classes/employee';
import { Observable } from 'rxjs';


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
      datafields: //new Employee,
      
        [
          { name: 'id', type: 'number', map: '0' },
          { name: 'LastName', type: 'string', map: '1' },
          { name: 'FirstName', type: 'string', map: '2' },
          { name: 'MiddleName', type: 'string', map: '3' },
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
          { name: 'Email', type: 'string', map: '16' },
          { name: 'Other', type: 'string', map: '17' },
          { name: 'MobilePhone', type: 'string', map: '18' },
          { name: 'OrganizationalUnitId', type: 'number', map: '19' },
          { name: 'AdditionalField1', type: 'string', map: '20' },
          { name: 'AdditionalField2', type: 'string', map: '20' },
          { name: 'AdditionalField3', type: 'string', map: '20' },
          { name: 'AdditionalField4', type: 'string', map: '20' },
          { name: 'AdditionalField5', type: 'string', map: '20' },
          { name: 'AdditionalField6', type: 'string', map: '20' },
          { name: 'AdditionalField7', type: 'string', map: '20' },
          { name: 'AdditionalField8', type: 'string', map: '20' },
          { name: 'AdditionalField9', type: 'string', map: '20' },
          { name: 'AdditionalField10', type: 'string', map: '20' },
          { name: 'Active', type: 'boolean', map: '21' },
          { name: 'InternalField1', type: 'object', map: '22' },
          { name: 'InternalField2', type: 'object', map: '23' },
          { name: 'InternalField3', type: 'object', map: '24' },
          { name: 'InternalField4', type: 'object', map: '25' },
          { name: 'InternalField5', type: 'boolean', map: '26' },
          { name: 'CurrentWorkingSchemeId', type: 'number', map: '27' }
        ],
     

      datatype: 'array'
    };

  dataAdapter: any = new jqx.dataAdapter(this.source);


  columns: any[] = [{}];
  /*
    [
      { text: 'ID', datafield: 'id', width: 20 },
      { text: 'Ime', datafield: 'FirstName', width: 150 },
      { text: 'Priimek', datafield: 'LastName', width: 100 },
      { text: 'Email', datafield: 'Email', width: 100 },
      { text: 'Matična', datafield: 'AdditionalField1', width: 100 },
      { text: 'Active', datafield: 'Active' }
    ];
*/


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    //this.onGetSession();
    this.onGetEmployee();
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


  
  


  //onGetEmployee(): void { // IEmployee[] {
  onGetEmployee(): Employee[] {

    //let source:any = [];

    Globalconstants.ReLogin(() => this.onGetSession()); // Neccesseary

    let result: Employee[] = [];
    this.employeeService.getEmployees().subscribe(
      {
        next: (employeeList) => {
          //console.table(employeeList);
          result = employeeList;
          //result = employeeList.pop();
          this.source.localdata = result;

          console.log(Object.getOwnPropertyNames(result[0]));
          let defs = Object.getOwnPropertyNames(result[0]);
          
          //this.columns
          console.log(this.columns.keys.name);


          //console.log("---   {",result[0].Email,"}   ---");

          //Object.getOwnPropertyNames(result[0])

          let neki = result[0].Email;
          console.log("---   {",neki,"}   ---");    // email

          
          //  this.source.localdata = neki;


          //this.dataAdapter = employeeList;
          //console.log("----------------------------");
          /*
          //console.log(this.source.localdata);
          let testsource1 = this.source.localdata;
          let object1 = JSON.stringify(testsource1, null, 4);
          let object1String = testsource1[0];
          let object2String = JSON.stringify(object1String, null, 4);


          //console.count(Object.keys(this.source.localdata));
          console.log(object1String);
          console.log(object2String);
          */
         //console.log(this.source.datafield);
          //console.log("----------------------------");

          //this.source.localdata = object1;
          this.dataAdapter = new jqx.dataAdapter(this.source);
          //this.dataAdapter = new jqx.dataAdapter(object2String);
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    )
    /*
    var data1 = [{ "empName": "test", "age": "67", "department": { "id": "1234", "name": "Sales" }, "author": "ravi"}];
    var source1 =
    {
        datatype: "json",
        datafields: [
            { name: 'empName' },
            { name: 'age' },
            { name: 'id', map: 'department&gt;id' },
            { name: 'name', map: 'department&gt;name' },
            { name: 'author' }
        ],
        localdata: data1
    };
    this.dataAdapter = new jqx.dataAdapter(source1);
    */
    return result;

  }



}