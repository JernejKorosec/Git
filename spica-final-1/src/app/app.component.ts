import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { EmployeeService } from './services/employee.service';
import { Globalconstants } from './common/global/globalconstants';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { IEmployee } from './interfaces/employee';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

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
          localStorage.setItem('SpicaApi_Session_Token', jsonData);
          localStorage.setItem('SpicaApi_Session_Timestamp', new Date().toString());
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    );
  }

  onGetEmployee(): void { // IEmployee[] {

    //let source:any = [];

    Globalconstants.ReLogin(() => this.onGetSession()); // Neccesseary

    this.employeeService.getEmployees().subscribe(
      {
        next: (employeeList) => {
          console.table(employeeList);
          //source = employeeList;
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    )

    //return source;

  }



}