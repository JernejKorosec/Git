import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { User } from './interface/user';
//import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularhttp';
  private someUserData: any = {
    'id': 2,  // needed forpatch
    'name': 'Junior Graham',
    'username': 'junior',
    'email': 'emailfromsomewhere@april.biz'
  }

  private user: User = {
    //'id': 1, // id of user is optional id?
    //'id': 5,  // needed for update user
    'id': 5,  // needed forpatch
    'name': 'Junior Graham',
    'username': 'junior',
    'email': 'emailfromsomewhere@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Get Arrays',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  }

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
    //this.onDeleteUser();
    //this.onPatchUser();
    //this.onUpdateUser();
    this.onGetUsers();
    //this.onCreateUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe( // deprecated
      (response) => console.log(response),
      //(response)  => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
      /*
       next: (v) => console.log(v),
       error: (e) => console.error(e),
       complete: () => console.info('complete') 
       */
    );
  }

  onCreateUser(): void {
    //this.userService.getUsers().subscribe( // deprecated
    this.userService.createUser(this.user).subscribe( // deprecated
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user')
    );
  }

  onUpdateUser(): void {
    //this.userService.getUsers().subscribe( // deprecated
    this.userService.updateUser(this.user).subscribe( // deprecated
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done updating user')
    );
  }

  onPatchUser(): void {
    //this.userService.getUsers().subscribe( // deprecated
    //this.userService.updateUser(this.user).subscribe( // deprecated
    this.userService.updateUser(this.someUserData).subscribe( // deprecated
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done patching user')
    );
  }

  onDeleteUser(): void {
    this.userService.deleteUser(5).subscribe( // deprecated
      (response) => console.log('Response from delete: ', response),
      (error: any) => console.log(error),
      () => console.log('Done deleting user')
    );
  }



  //onUploadFile(files: File[]): void {
    onUploadFile(files: any): void {
    console.log(files);
      const formData = new FormData();
      for (const file of files) {
        formData.append('files', file, file.name);
      }
      this.userService.uploadFiles2(formData).subscribe(
        (event) => {
          switch (event.type) {
            case HttpEventType.UploadProgress || HttpEventType.DownloadProgress:
              console.log(event);
              break
            case HttpEventType.Response:
              console.log(event);
              break
          }
        },
        (error: any) => console.log(error),
        () => console.log('Done uploading files')
      );
    
  }

}