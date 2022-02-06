import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { TasksComponent } from './views/tasks/tasks.component';

import { UserService } from './services/mock/user.service';

import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent    // components that are NOT in its own module
  ],
  imports: [
    BrowserModule,    // componenets in own module, own namespace!
    AppRoutingModule,  // componenets in own module, own namespace!
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService
  ],    // Providers share code between conmponents
  bootstrap: [AppComponent]  // main component entry point
})
export class AppModule { }
