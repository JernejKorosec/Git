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
  e:Employee[] = [];

  source: any =
  {
    /*
      localdata: [
          ['Alfreds Futterkiste', 'Maria Anders', 'Sales Representative', 'Obere Str. 57', 'Berlin', 'Germany'],
          ['Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Owner', 'Avda. de la Constitucin 2222', 'Mxico D.F.', 'Mexico'],
          ['Antonio Moreno Taquera', 'Antonio Moreno', 'Owner', 'Mataderos 2312', 'Mxico D.F.', 'Mexico']
     ],
     */
     localdata: this.e,
      datafields:
      /* [
          { name: 'CompanyName', type: 'string', map: '0' },
          { name: 'ContactName', type: 'string', map: '1' },
          { name: 'Title', type: 'string', map: '2' },
          { name: 'Address', type: 'string', map: '3' },
          { name: 'City', type: 'string', map: '4' },
          { name: 'Country', type: 'string', map: '5' }
      ],
      */
     [
      { name: 'id', type: 'number', map: '0' },
      { name: 'LastName', type: 'string', map: '1' },
      { name: 'FirstName', type: 'string', map: '2' },
      { name: 'MiddleName', type: 'string', map: '3' },
    ]
      //id? : number;
      //LastName? : string;
      //FirstName? : string;
      //MiddleName? : string;
      City? : string;
      Phone? : string;
      Address? : string;
      State? : string;
      Fax? : string;
      ReferenceId? : string;
      Birth? : string;
      WorkingSchemeType? : number;
      Occupation? : string;
      Unit3? : string;
      Unit2? : string;
      Unit1? : string;
      Email? : string;
      Other? : string;
      MobilePhone? : string;
      OrganizationalUnitId? : number;
      AdditionalField1? : string;
      AdditionalField2? : string;
      AdditionalField3? : string;
      AdditionalField4? : string;
      AdditionalField5? : string;
      AdditionalField6? : string;
      AdditionalField7? : string;
      AdditionalField8? : string;
      AdditionalField9? : string;
      AdditionalField10? : string;
      Active? : boolean;
      InternalField1? : object;
      InternalField2? : object;
      InternalField3? : object;
      InternalField4? : object;
      InternalField5? : object;
      CurrentWorkingSchemeId? : number;

      datatype: 'array'
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] =
  [
      { text: 'Company Name', datafield: 'CompanyName', width: 200 },
      { text: 'Contact Name', datafield: 'ContactName', width: 150 },
      { text: 'Contact Title', datafield: 'Title', width: 100 },
      { text: 'Address', datafield: 'Address', width: 100 },
      { text: 'City', datafield: 'City', width: 100 },
      { text: 'Country', datafield: 'Country' }
  ];



/*
  source: any =
  {
      datatype: 'xml',
      datafields: [
          { name: 'ProductName', type: 'string' },
          { name: 'QuantityPerUnit', type: 'int' },
          { name: 'UnitPrice', type: 'float' },
          { name: 'UnitsInStock', type: 'float' },
          { name: 'Discontinued', type: 'bool' }
      ],
      root: 'Products',
      record: 'Product',
      id: 'ProductID',
      url: '../sampledata/products.xml'
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  cellsrenderer = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {
      if (value < 20) {
          return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
      }
      else {
          return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
      }
  };

  columns: any[] =
  [
      { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
      { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right' },
      { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
      { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100 },
      { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
  ];

  columngroups: any[] =
  [
      { text: 'Product Details', align: 'center', name: 'ProductDetails' }
  ];


/*
  source: any =
    {
      datatype: 'xml',
      datafields: [
        { name: 'ProductName', type: 'string' },
        { name: 'QuantityPerUnit', type: 'int' },
        { name: 'UnitPrice', type: 'float' },
        { name: 'UnitsInStock', type: 'float' },
        { name: 'Discontinued', type: 'bool' }
      ],
      root: 'Products',
      record: 'Product',
      id: 'ProductID',
      url: './../../../sampledata/products.xml'
    };
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }
  dataAdapter: any = new jqx.dataAdapter(this.source);
  cellsrenderer = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {
    if (value < 20) {
      return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
    }
    else {
      return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
    }
  };
  columns: any[] =
    [
      { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
      { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right' },
      { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
      { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100 },
      { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
    ];
  columngroups: any[] =
    [
      { text: 'Product Details', align: 'center', name: 'ProductDetails' }
    ];
*/



















  

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
          console.table(employeeList);
          result = employeeList;
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    )

    return result;

  }



}