import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  onReset(): void {
    console.log('onReset');
  }
  onLogin(): void {
    console.log('onLogin');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
