import { HttpClient } from '@angular/common/http';
import { Component, OnInit, setTestabilityGetter } from '@angular/core';
//import { Observable } from 'rxjs';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularhttp';

  constructor(private userService: UserService) {
   //constructor() {

    //type HttpResponse = { code: number, data: string };

    // const observable = new Observable<HttpResponse>(subscriber => {
    //   console.log('Inside subscriber..');
    //   subscriber.next({ code: 200, data: 'this is data 1...' });
    //   subscriber.next({ code: 200, data: 'this is data 2...' });
    //   subscriber.next({ code: 200, data: 'this is data 3...' });
    //   subscriber.error({ code: 500, data: 'An Error Message' })
    //   setTimeout(() => {
    //     subscriber.next({ code: 200, data: 'this is data more data' });
    //     subscriber.complete();
    //   }, 3 * 1000);
    //   console.log('Subscriber is done emitting...');
    // });

    // // Comment === Control + K + U,   Uncomment ===  Control + K + U
    // observable.subscribe({
    //   next(response: HttpResponse){
    //     console.log('got response: ', response);
    //   },
    //   error(error:any){
    //     console.log('something wrong occured: ', error)
    //   }
    // })
  }
  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers() : void {
    this.userService.getUsers().subscribe( // deprecated
      
      (response)  => console.log(response),
      (error: any)  => console.log(error),
      ()  => console.log('Done getting users')
    
   /*
    next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.info('complete') 
    */
    );
  }
}

