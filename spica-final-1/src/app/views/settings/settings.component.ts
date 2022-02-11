import { Component, OnInit } from '@angular/core';
import { Globalconstants } from 'src/app/common/global/globalconstants';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  APIGUIDBigTime: any = "87F262C4-7FA6-46D3-880D-2F7E15B4F204";

  constructor() {
    Globalconstants.Auth_GetSession_Token = `SpicaToken ${this.APIGUIDBigTime}`;
  }
  onGuidChanged() {
    Globalconstants.Auth_GetSession_Token = `SpicaToken ${this.APIGUIDBigTime}`;
  }
  ngOnInit(): void {
  }

}
