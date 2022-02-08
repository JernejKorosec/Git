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
    this.isSessionValid();
  }

/// ==============================================================================
/// ====    RECREATE SESSION IF 19 minutes passed   ==============================
/// ==============================================================================
  has19MinsPassed(startDate:Date, endDate:Date ) : boolean
  {
    var Difference_In_Time = endDate.getTime() - startDate.getTime();
    var Difference_In_Days = Difference_In_Time / (60000);
    if(Difference_In_Days>19){
      return true;
    }
    return false;
  }

  isSessionValid(){
    if (localStorage.getItem("SpicaApi_Session_Timestamp") === null)
    {
      console.log("if");
      this.onGetSession();
    }
    else{
      const storedTimeStr = (localStorage.getItem('SpicaApi_Session_Timestamp')+"").toString();
      const storedTimeStr2 = Date.parse(storedTimeStr);
      var storedTime = new Date(storedTimeStr2);
      var new1 = new Date();
      var sessionTimeoutOccured = this.has19MinsPassed(storedTime,new1);
      console.log("\n\r StoredTime:",storedTime,"\n\r NewTime:   ",new1,"\n\r 19minpassed: ",sessionTimeoutOccured);
      if(sessionTimeoutOccured){
        this.onGetSession();
      }
    }
  }

  timeDiffInMinutes(currentdate1: Date,currentdate2: Date):number{
    var Difference_In_Time = currentdate2.getTime() - currentdate1.getTime();
    var Difference_In_Days = Math.floor(Difference_In_Time / (60000));
    return Difference_In_Days;
  }

  onGetSession(): void {
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
          console.log(employeeList.toString());
          //console.log("Token je:" + response.Token);
        },
        error: (e) => console.error('e'),
        complete: () => console.info('complete'),
      }
    )

  }


}
