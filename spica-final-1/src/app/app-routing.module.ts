import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './views/settings/settings.component';
import { UsersComponent } from './views/users/users.component';
import { PresenceComponent } from './views/presence/presence.component';

//const routes: Routes = [];
const routes: Routes = [
  //{ path: '**', redirectTo: '/', pathMatch: 'full' }, // prvi redirekt
  { path: '', redirectTo: '/', pathMatch: 'full' }, // prvi redirekt
  //{ path: '', redirectTo: '/users', pathMatch: 'full' }, // prvi redirekt
  { path: 'settings', component: SettingsComponent },
  { path: 'users', component: UsersComponent },
  //{ path: 'users/:id', component: HeroDetailComponent },
  { path: 'presence', component: PresenceComponent }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
