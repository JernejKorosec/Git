import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmployeeService } from './services/employee.service';
import { Globalconstants } from './common/global/globalconstants';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { Employee } from './classes/employee';
import { map, Observable } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  myusername: string = "";
  title = 'Spica TimeAPI';
  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
  }
}