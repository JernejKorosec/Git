import { Injectable } from '@angular/core';
import { Observable,Observer } from 'rxjs';
import { UserVO } from 'src/app/vo/user-vo';
import {HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // input username, password   output Observable<UserVO>
  authenticate(username : string, password : string) : Observable<UserVO> 
  { 
    let o : Observable<UserVO> = new Observable( (observer : Observer<UserVO>) => 
      {
          setTimeout( () => {}, 1000 )
          {            
            let result : UserVO = new UserVO();

            //npm install @swimlane/ngx-datatable
            //npm install @Reboog711/ngx-datatable
            //npm i @swimlane/ngx-datatable --save
            //npm install "https://github.com/shakacode/bootstrap-loader.git#branch-name" --save
            //https://github.com/Reboog711/ngx-datatable/tree/angular-13-take-3


            if (( username === 'me' ) && ( password === 'me' )) {
                result.userID = 1;
                result.username = "me";
                result.roleID = 1;
                observer.next(result);

              } else if (( username === 'you' ) && ( password === 'you' )) 
                {
                result.userID = 2;
                result.roleID = 2;
                result.username = "you";
                observer.next(result);
                }
                else {
                  const error: any = {};
                  error['message'] = 'User Not Authorized';
                  const errorResult: HttpErrorResponse = new HttpErrorResponse({error});
                  observer.error(errorResult);
                  }
         }
      });
    return o; 
  }
  constructor() { }
}