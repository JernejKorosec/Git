import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { EmployeeService } from './services/employee.service';
import { Globalconstants } from './common/global/globalconstants';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { Employee } from './classes/employee';
import { map, Observable } from 'rxjs';


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
         /* { name: 'FirstName', type: 'string', map: '2' },
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
          { name: 'CurrentWorkingSchemeId', type: 'number', map: '27' }*/
        ],
      datatype: 'array'
    };

  dataAdapter: any = new jqx.dataAdapter(this.source);


  columns: any[] = 
  
    [
      { text: 'ID', datafield: 'Id', width: 100 },
      { text: 'Priimek', datafield: 'LastName', width: 100 },
      /*
      { text: 'Ime', datafield: 'FirstName', width: 150 },
      { text: 'Email', datafield: 'Email', width: 100 },
      { text: 'Matična', datafield: 'AdditionalField1', width: 100 },
      { text: 'Active', datafield: 'Active' }
      */
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


  //somefunction(employeeArr:Employee[]):any {
    somefunction(employeeArr:Employee[]):any {
    //console.log("========================");
    //console.log("somefunction");
    //console.log(employeeArr[0]);
    //var estring='';
    /*
    employeeArr.forEach( 
      (employee) => { 

        var e = new Employee();
        e.Id= employee.Id;
        e.FirstName = employee.FirstName;
        estring += JSON.stringify(e);
      }
    );*/
    let temp = JSON.stringify(employeeArr.map(({Id,FirstName})=>({Id,FirstName})));
    //console.log(temp);
    //console.log(estring);
    //console.log("========================");
    //return estring;
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
          //console.table(employeeList[0]);
          result = employeeList;
          //this.source.localdata = result;
          //let a = this.somefunction(employeeList);
          //console.log(`Type of source1 ${employeeList}:`, typeof employeeList);
          
          const sel: Object[] = employeeList.map(employee =>  ({Id: employee.Id, Firstname: employee.FirstName })); // no error
          const newList = employeeList.map(employee => [employee.Id, employee.FirstName]);

          console.log(`sel is typeof: ${typeof sel}, and value is:`,sel);
          console.log(`newList is typeof: ${typeof newList}, and value is:`,newList);
          const usersJson: any[] = Array.of(sel);
          console.log("Jiiiiiihaaaaaaa:",usersJson);

          //var employeeEntries: [string, number][] = [];
          //var shortAtributeemployeeList2: [string, number][] = employeeList.map( employee =>  ({Id: employee.Id, Firstname: employee.FirstName })); // no error
          


          //debugger
          //this.source.localdata = a;
          let source1 =
          {
              localdata: [
                  [1, 'Maria Anders'],
                  [2, 'Mxico D.F.'],
                  [3,'Antonio Moreno Taquera']
              ],
          };
          /*
          let a1 = source1;
          let a2 = source1.localdata;
          let a3 = source1.localdata[0];
          let a4 = source1.localdata[0][0];

          console.log(`Type of source1 ${a1}:`, typeof a1);
          console.log(`Type of source1.localdata ${a2}:`, typeof a2);
          console.log(`Type of source1.localdata[0] ${a3}:`, typeof a3);
          console.log(`Type of source1.localdata[0][0] ${a4}:`, typeof a4);
          
          console.log("TYPEOF---> :", typeof source1.localdata[0][0]);
          */

          //this.source.localdata = result;
          let bbb = source1.localdata;
          console.log(`bbb is typeof: ${typeof bbb}, and value is:`,bbb);
          //this.source.localdata = bbb;
          this.source.localdata = newList;


          //this.source.localdata = shortAtributeemployeeList;
          



          //let watch1 = result;
          //let watch2 = this.somefunction(employeeList);
          //debugger;

          //console.log(Object.getOwnPropertyNames(result[0]));
          //let defs = Object.getOwnPropertyNames(result[0]);
          
          //this.columns
          //console.log(this.columns.keys.name);


          //console.log("---   {",result[0].Email,"}   ---");

          //Object.getOwnPropertyNames(result[0])

          //let neki = result[0].Email;
          //console.log("---   {",neki,"}   ---");    // email

          
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
  
    return result;

  }



}