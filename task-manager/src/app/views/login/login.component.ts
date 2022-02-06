import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from 'src/app/services/mock/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user-model';

//for authenticate
import {UserVO} from "../../vo/user-vo";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  loginError = '';
  usernameError = '';
  passwordError = '';



  onReset(): void {
    this.username = '';
    this.password = '';

    console.log('onReset');
  }
  onLogin(): void {
    let errorFound: boolean = false;

    if (this.username === '') {
      this.usernameError = 'You Must Enter a Username';
      errorFound = true;
    } else {
      this.usernameError = '';
    }
    
    if (this.password === '') {
      this.passwordError = 'You Must Enter a Password';
      errorFound = true;
    } else {
      this.passwordError = '';
    }
    
    if (errorFound === true) {
      return;
    }
    this.loginError = '';

    this.userService.authenticate( this.username, this.password ).subscribe({
      next: (result: UserVO) => {
        // result code
        this.userModel.user = result;
        this.router.navigate(['/tasks']);

      },
      error: (error: HttpErrorResponse) => {
        // error code
      }
    }
  );
  
  


    console.log('onLogin');
  }
  constructor(
    private userService: UserService, // kopoonente katere v kontruktorju deifiniramo 
    private router: Router,
    private userModel: UserModel) { }

  ngOnInit(): void {
  }

}
