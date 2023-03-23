import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/Profile/profile-header/profileHeader.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/Profile/profile.component';

const routes: Routes = [
  {path:'',redirectTo:'AppComponent',pathMatch:'full'},
  { path: 'profile', component: ProfileComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
