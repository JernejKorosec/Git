import { NgModule } from '@angular/core';
import { AppComponent }     from './app.component';
import { BrowserModule } from '@angular/platform-browser';  
import { jqxBarGaugeModule }  from 'jqwidgets-ng/jqxbargauge';    //// Added Custom jqwidget component

import { CommonModule } from '@angular/common';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    jqxBarGaugeModule, // Added Custom jqwidget component
    CommonModule, jqxGridModule, jqxCheckBoxModule, jqxButtonModule, jqxPanelModule // GRID
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
