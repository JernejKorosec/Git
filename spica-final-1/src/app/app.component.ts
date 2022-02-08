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
    this.testLocalStorage();
  }

  

  testLocalStorage(){
    
    
    console.log("testLocalStorage");

    const currentdate1 = new Date('2022-02-08T17:27:59.8914361+01:00');
    const currentdate2 = new Date();
    
    var Difference_In_Time = currentdate2.getTime() - currentdate1.getTime();
    var Difference_In_Days = Difference_In_Time / (60000);
    
    console.log("Session Timestamp:", Difference_In_Days);


    if (localStorage.getItem("SpicaApi_Session_Timestamp") === null)
    {
      const currentdate = new Date();
      localStorage.setItem('SpicaApi_Session_Timestamp',currentdate.toString());  
      var storedTime = localStorage.getItem('SpicaApi_Session_Timestamp')+"";
      console.log("Time not stored, added to local storage:",storedTime);
      
    }
    else if (localStorage.getItem("SpicaApi_Session_Timestamp") !== null)
    {

      var storedTime = localStorage.getItem('SpicaApi_Session_Timestamp')+"";
      
      console.log("Time stored, fetchedfrom local storage:",storedTime);
      //localStorage.removeItem('SpicaApi_Session_Timestamp');

    }





    if (localStorage.getItem("SpicaApiSessionStartTime") === null) {
      //console.log("IF");
      
      const currentdate = new Date();
      var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
      //localStorage.setItem('SpicaApiSessionStartTime',currentdate.toString());  
      //console.log(`start${currentdate}`);

    }
    else{
      //console.log("ELSE");
      //const currentDateTime = new Date();
      var storedDateTime = new Date(parseInt(localStorage.getItem('SpicaApiSessionStartTime')+"", 10))
      //console.log(new Date());
      // subtract and get time in minutes
      const currentDateTime = new Date(2020, 2, 1);
      //const d1 = new Date(2020, 1, 1);
      const diffMs = +currentDateTime - +storedDateTime;
      const diffMins = Math.floor((diffMs / 1000) / 60);
      //console.log(diffMins)


    }

    
    
  }




  onGetSession(): void {
    this.employeeService.requestSessionToken().subscribe(
      {
        next: (response) => {
          Globalconstants.Auth_InSession_Token = response.Token;
          console.log("onGetSession(): Token je:" + Globalconstants.Auth_InSession_Token);
          
          //FIXME: Local storage
          const jsonData = JSON.stringify(response.Token)
          localStorage.setItem('Globalconstants.Auth_InSession_Token',jsonData);

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
