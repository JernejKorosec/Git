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

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.onGetSession();
  }

  onGetSession(): void {
    let v2 = this.employeeService.requestSessionToken().subscribe( 
      {
        next: (response) => {
          Globalconstants.Auth_InSession_Token = response.Token;
          //console.log("Token je:" + response.Token);
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    );
    }
}
