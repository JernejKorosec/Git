import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule} from '@angular/common/http';
import { SettingsComponent } from './views/settings/settings.component';
import { UsersComponent } from './views/users/users.component';
import { PresenceComponent } from './views/presence/presence.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    UsersComponent,
    PresenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }